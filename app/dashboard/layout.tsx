// app/(admin)/admin/layout.tsx
"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users2,
  School,
  ClipboardList,
  Settings2,
  BarChart3,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navItems = [
  {
    label: "Overview",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Users & Roles",
    href: "/admin/users",
    icon: Users2,
  },
  {
    label: "Academics",
    href: "/admin/academics",
    icon: School,
  },
  {
    label: "Audit log",
    href: "/admin/audit-log",
    icon: ClipboardList,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings2,
  },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-50 pb-14 md:pb-0">
      <div className="mx-auto flex max-w-6xl gap-5 px-4 py-6 md:px-6">
        {/* Sidebar – desktop / tablet only (mobile uses bottom nav from Header) */}
        <aside className="hidden w-64 shrink-0 md:block">
          <Card className="flex h-full flex-col border-slate-200 bg-white/90 shadow-sm backdrop-blur">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <CardTitle className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
                      HU
                    </span>
                    HUMS Admin
                  </CardTitle>
                  <CardDescription className="mt-1 text-[11px] text-slate-500">
                    Main Admin console for Hormuud University.
                  </CardDescription>
                </div>
                <Badge
                  variant="outline"
                  className="border-emerald-200 bg-emerald-50 text-[10px] font-medium text-emerald-700"
                >
                  MAIN_ADMIN
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex-1 space-y-2 px-2 py-2">
              <p className="px-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Navigation
              </p>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active =
                    pathname === item.href ||
                    (item.href !== "/admin" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition",
                        active
                          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 shadow-[0_0_0_1px_rgba(16,185,129,0.12)]"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-[11px]">
                <div className="mb-1 flex items-center gap-1 text-slate-700">
                  <BarChart3 className="h-3 w-3" />
                  <span className="font-semibold">Quick insight</span>
                </div>
                <p className="text-slate-500">
                  Use this console to manage all admins, teachers, students,
                  and academic structure.
                </p>
              </div>
            </CardContent>

            <CardFooter className="border-t border-slate-100 px-4 py-3">
              <div className="flex flex-col text-[11px] text-slate-500">
                <span className="font-medium text-slate-700">
                  Hormuud CampusOS
                </span>
                <span>HUMS • University Management Platform</span>
              </div>
            </CardFooter>
          </Card>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
