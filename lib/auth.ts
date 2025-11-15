// src/lib/auth.ts
import 'server-only';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { prisma } from './db';

const AUTH_COOKIE = 'hums_session';
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export type RoleName =
  | 'MAIN_ADMIN'
  | 'FINANCE_ADMIN'
  | 'EXAMS_ADMIN'
  | 'RESULTS_ADMIN'
  | 'DEPARTMENT_ADMIN'
  | 'TEACHER'
  | 'STUDENT';

export type SessionPayload = {
  sub: string;         // user id
  email: string;
  roles: RoleName[];
};

export function signSession(payload: SessionPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '8h',
  });
}

export function verifyToken(token: string): SessionPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as SessionPayload;
  } catch {
    return null;
  }
}

// 🔑 Used in route handlers (API)
export async function getSessionFromRequest(
  req: NextRequest,
): Promise<SessionPayload | null> {
  const token =
    req.cookies.get(AUTH_COOKIE)?.value ??
    req.headers.get('x-hums-session') ??
    '';
  if (!token) return null;
  return verifyToken(token);
}

// 🔒 Require MAIN_ADMIN inside API routes
export async function requireMainAdminApi(
  req: NextRequest,
): Promise<SessionPayload> {
  const session = await getSessionFromRequest(req);
  if (!session || !session.roles.includes('MAIN_ADMIN')) {
    throw NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return session;
}

// 🧭 Used in server components / pages
export async function getSessionFromCookies(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;
  if (!token) return null;
  return verifyToken(token);
}

// Used by login API
export async function createMainAdminSessionCookie(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      roles: { include: { role: true } },
    },
  });

  if (!user || !user.isActive) return null;

  const roles = user.roles.map((r) => r.role.name) as RoleName[];

  const payload: SessionPayload = {
    sub: user.id,
    email: user.email,
    roles,
  };

  const token = signSession(payload);

  const res = NextResponse.json({ success: true });
  res.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8, // 8h
  });

  return res;
}

export function clearSessionCookie(): NextResponse {
  const res = NextResponse.json({ success: true });
  res.cookies.set(AUTH_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return res;
}
