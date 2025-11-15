// src/app/api/admin/audit-logs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { requireMainAdminApi } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    await requireMainAdminApi(req);
  } catch (res) {
    return res as NextResponse;
  }

  const logs = await prisma.auditLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
    include: { actor: true, targetUser: true },
  });

  return NextResponse.json(
    logs.map((log) => ({
      id: log.id,
      actor: log.actor.email,
      target: log.targetUser?.email ?? null,
      action: log.action,
      entityType: log.entityType,
      createdAt: log.createdAt,
    })),
  );
}
