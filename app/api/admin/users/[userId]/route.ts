// src/app/api/admin/users/[userId]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { requireMainAdminApi } from '@/lib/auth';
import { createAuditLog } from '@/lib/audit';
import { userUpdateSchema } from '@/lib/validations/user';

export const runtime = 'nodejs';

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } },
) {
  try {
    await requireMainAdminApi(req);
  } catch (res) {
    return res as NextResponse;
  }

  const user = await prisma.user.findUnique({
    where: { id: params.userId },
    include: { roles: { include: { role: true } } },
  });

  if (!user) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    isActive: user.isActive,
    roles: user.roles.map((ur) => ur.role.name),
  });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { userId: string } },
) {
  let session;
  try {
    session = await requireMainAdminApi(req);
  } catch (res) {
    return res as NextResponse;
  }

  const body = await req.json().catch(() => null);
  const parsed = userUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: params.userId },
    include: { roles: true },
  });

  if (!user) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  // Update user & roles in a transaction
  await prisma.$transaction(async (tx) => {
    if (parsed.data.firstName || parsed.data.lastName || parsed.data.isActive != null) {
      await tx.user.update({
        where: { id: user.id },
        data: {
          firstName: parsed.data.firstName ?? user.firstName,
          lastName: parsed.data.lastName ?? user.lastName,
          isActive:
            parsed.data.isActive !== undefined ? parsed.data.isActive : user.isActive,
        },
      });
    }

    if (parsed.data.roles) {
      const roleRecords = await tx.role.findMany({
        where: { name: { in: parsed.data.roles as any } },
      });

      // remove old roles
      await tx.userRole.deleteMany({ where: { userId: user.id } });

      // add new roles
      await tx.userRole.createMany({
        data: roleRecords.map((r) => ({
          userId: user.id,
          roleId: r.id,
          assignedById: session.sub,
        })),
      });
    }

    await createAuditLog({
      actorId: session.sub,
      targetUserId: user.id,
      action: 'UPDATE_USER',
      entityType: 'USER',
      entityId: user.id,
      meta: parsed.data,
    });
  });

  return NextResponse.json({ success: true });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: string } },
) {
  let session;
  try {
    session = await requireMainAdminApi(req);
  } catch (res) {
    return res as NextResponse;
  }

  const user = await prisma.user.findUnique({
    where: { id: params.userId },
  });
  if (!user) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  await prisma.$transaction(async (tx) => {
    await tx.userRole.deleteMany({ where: { userId: user.id } });
    await tx.user.delete({ where: { id: user.id } });

    await createAuditLog({
      actorId: session.sub,
      targetUserId: user.id,
      action: 'DELETE_USER',
      entityType: 'USER',
      entityId: user.id,
      meta: { email: user.email },
    });
  });

  return NextResponse.json({ success: true });
}
