// src/lib/audit.ts
import { prisma } from './db';

type AuditParams = {
  actorId: string;
  targetUserId?: string;
  action: string;
  entityType: string;
  entityId?: string;
  meta?: Record<string, unknown>;
};

export async function createAuditLog(params: AuditParams) {
  const { actorId, targetUserId, action, entityType, entityId, meta } = params;
  await prisma.auditLog.create({
    data: {
      actorId,
      targetUserId,
      action,
      entityType,
      entityId,
      meta,
    },
  });
}
