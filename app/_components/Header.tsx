// app/_components/Header.tsx
import Link from "next/link";
import {
  LayoutDashboard,
  Home,
  Info,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "About",
    href: "/about",
    icon: Info,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Phone,
  },
];

export function Header() {
  return (
    <>
      {/* Top header – visible on md+ (desktop/tablet) */}
      <header className="hidden border-b border-slate-200 bg-white/80 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              HU
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                HUMS
              </p>
              <p className="text-[11px] text-slate-500">
                Hormuud University Management System
              </p>
            </div>
          </div>

          {/* Center nav */}
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right side – session / profile (you can adjust later if not logged-in area) */}
          <div className="flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-emerald-200 bg-emerald-50 text-[10px] font-medium text-emerald-700"
            >
              MAIN_ADMIN
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="border-slate-200 text-xs text-slate-700 hover:bg-slate-100"
            >
              Logout
            </Button>
            <Avatar className="h-8 w-8 border border-slate-200">
              <AvatarFallback className="text-[11px] font-medium text-slate-700">
                MA
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Bottom app-style nav – visible on mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/90 px-2 py-1.5 shadow-[0_-6px_30px_rgba(15,23,42,0.06)] backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[11px] text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
