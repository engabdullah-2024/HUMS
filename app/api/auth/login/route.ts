// src/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/db';
import { loginSchema } from '@/lib/validations/auth';
import { createMainAdminSessionCookie } from '@/lib/auth';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({
    where: { email },
    include: { roles: { include: { role: true } } },
  });

  if (!user || !user.isActive) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const hasMainAdmin = user.roles.some((r) => r.role.name === 'MAIN_ADMIN');

  if (!hasMainAdmin) {
    // only MAIN_ADMIN can log into this module
    return NextResponse.json({ error: 'Not allowed' }, { status: 403 });
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const res = await createMainAdminSessionCookie(user.id);
  if (!res) {
    return NextResponse.json({ error: 'Unable to create session' }, { status: 500 });
  }

  return res;
}
