// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

const AUTH_COOKIE = 'hums_session';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute =
    pathname.startsWith('/admin') || pathname.startsWith('/api/admin');

  if (!isAdminRoute) return NextResponse.next();

  const token = req.cookies.get(AUTH_COOKIE)?.value;
  if (!token) {
    // API vs page
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const session = verifyToken(token);
  const isMainAdmin =
    session && Array.isArray(session.roles) && session.roles.includes('MAIN_ADMIN');

  if (!isMainAdmin) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
