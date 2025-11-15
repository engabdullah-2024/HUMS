// src/app/api/admin/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';
import { requireMainAdminApi } from '@/lib/auth';
import { createAuditLog } from '@/lib/audit';
import { userCreateSchema } from '@/lib/validations/user';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    await requireMainAdminApi(req);
  } catch (res) {
    return res as NextResponse;
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      roles: {
        include: { role: true },
      },
    },
  });

  return NextResponse.json(
    users.map((u) => ({
      id: u.id,
      email: u.email,
      firstName: u.firstName,
      lastName: u.lastName,
      isActive: u.isActive,
      roles: u.roles.map((ur) => ur.role.name),
      createdAt: u.createdAt,
    })),
  );
}

export async function POST(req: NextRequest) {
  let session;
  try {
    session = await requireMainAdminApi(req);
  } catch (res) {
    return res as NextResponse;
  }

  const body = await req.json().catch(() => null);
  const parsed = userCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const { email, firstName, lastName, password, roles } = parsed.data;

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const roleRecords = await prisma.role.findMany({
    where: { name: { in: roles as any } },
  });

  const created = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email,
        firstName,
        lastName,
        passwordHash,
        isActive: true,
      },
    });

    await tx.userRole.createMany({
      data: roleRecords.map((r) => ({
        userId: user.id,
        roleId: r.id,
        assignedById: session.sub,
      })),
    });

    await createAuditLog({
      actorId: session.sub,
      targetUserId: user.id,
      action: 'CREATE_USER',
      entityType: 'USER',
      entityId: user.id,
      meta: { email, roles },
    });

    return user;
  });

  return NextResponse.json({ id: created.id }, { status: 201 });
}
