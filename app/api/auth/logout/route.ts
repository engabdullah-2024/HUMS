// src/app/api/auth/logout/route.ts
import { NextRequest } from 'next/server';
import { clearSessionCookie } from '@/lib/auth';

export async function POST(_req: NextRequest) {
  return clearSessionCookie();
}
