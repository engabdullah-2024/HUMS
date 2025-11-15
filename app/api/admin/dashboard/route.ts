// src/app/api/admin/dashboard/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { requireMainAdminApi } from '@/lib/auth';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    await requireMainAdminApi(req);
  } catch (res) {
    return res as NextResponse;
  }

  const [students, teachers, programs, courses] = await Promise.all([
    prisma.user.count({
      where: { roles: { some: { role: { name: 'STUDENT' } } } },
    }),
    prisma.user.count({
      where: { roles: { some: { role: { name: 'TEACHER' } } } },
    }),
    prisma.program.count(),
    prisma.course.count(),
  ]);

  return NextResponse.json({
    students,
    teachers,
    programs,
    courses,
  });
}
