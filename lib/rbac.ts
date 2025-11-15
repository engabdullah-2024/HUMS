// src/lib/rbac.ts
import type { SessionPayload } from './auth';

export function isMainAdmin(session: SessionPayload | null): boolean {
  return !!session?.roles.includes('MAIN_ADMIN');
}
