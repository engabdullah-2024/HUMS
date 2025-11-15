// app/(admin)/admin/page.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users2, GraduationCap, BookOpen, Activity } from "lucide-react";

const kpiCards = [
  {
    label: "Total Students",
    value: "24,500",
    sub: "+3.8% this month",
    icon: Users2,
  },
  {
    label: "Total Teachers",
    value: "1,890",
    sub: "+1.2% this month",
    icon: GraduationCap,
  },
  {
    label: "Active Programs",
    value: "45",
    sub: "+6% this month",
    icon: BookOpen,
  },
  {
    label: "Pending Exams",
    value: "180",
    sub: "-18% this month",
    icon: Activity,
  },
];

const systemTimeline = [
  {
    title: "New student registered",
    detail: "HU-2025-10301 (Faculty of Computing)",
    time: "2 min ago",
  },
  {
    title: "Average GPA updated",
    detail: "Mid-term results synced for Semester 1",
    time: "18 min ago",
  },
  {
    title: "Exam results published",
    detail: "Year 3 – Computer Science (Section A & B)",
    time: "1 hour ago",
  },
  {
    title: "New admin added",
    detail: "Finance Admin – Accounts & Billing",
    time: "Yesterday",
  },
];

const studentsSnapshot = [
  {
    name: "Huzaifa Mohamed",
    id: "HU-2022-0345",
    program: "Computer Science",
    year: "Year 3",
    status: "Active",
  },
  {
    name: "Amina Ali",
    id: "HU-2023-1180",
    program: "Business Administration",
    year: "Year 2",
    status: "Active",
  },
  {
    name: "Mahad Hussein",
    id: "HU-2021-0920",
    program: "Civil Engineering",
    year: "Year 4",
    status: "Graduated",
  },
  {
    name: "Najma Abdi",
    id: "HU-2024-0451",
    program: "Information Systems",
    year: "Year 1",
    status: "Pending",
  },
];

const financeBars = [
  { label: "Jan", value: 45 },
  { label: "Feb", value: 60 },
  { label: "Mar", value: 72 },
  { label: "Apr", value: 54 },
  { label: "May", value: 80 },
  { label: "Jun", value: 68 },
];

const financeSummary = {
  paidPercent: 75,
  totalRevenue: "$1.2M",
  outstanding: "$250K",
};

export default function AdminDashboardPage() {
  const paid = financeSummary.paidPercent;
  const unpaid = 100 - paid;

  return (
    <div className="space-y-6">
      {/* Top header */}
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
            HUMS • Main Admin
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-900 md:text-2xl">
            Main Admin Dashboard
          </h1>
          <p className="mt-1 max-w-xl text-sm text-slate-600">
            High-level overview of students, teachers, programs, finance, and
            exams across Hormuud University — all in one control center.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <Badge className="rounded-full bg-emerald-600 text-white hover:bg-emerald-600">
            Live overview
          </Badge>
          <span className="text-slate-500">Last sync: a few seconds ago</span>
          <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-100">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-semibold text-emerald-800">
              EA
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-semibold text-slate-900">
                Eng Abdalla
              </span>
              <span className="text-[10px] text-slate-500">Main Admin</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPI strip */}
      <Card className="border-emerald-100 bg-gradient-to-r from-emerald-50/70 via-white to-emerald-50/50 shadow-[0_18px_60px_rgba(16,185,129,0.15)]">
        <CardContent className="grid gap-4 p-4 md:grid-cols-4 md:p-5 lg:p-6">
          {kpiCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 shadow-sm ring-1 ring-emerald-50"
              >
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-700">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[11px] text-emerald-700">
                    {item.sub}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                  <Icon className="h-5 w-5 text-emerald-700" />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Middle row: System timeline + Finance donut */}
      <section className="grid gap-4 lg:grid-cols-3">
        {/* System Timeline */}
        <Card className="lg:col-span-2 border-slate-100 bg-white shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-slate-900">
              System Timeline
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Recent key events across students, exams, and admin actions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {systemTimeline.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="mt-1 flex flex-col items-center">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {idx !== systemTimeline.length - 1 && (
                      <span className="mt-1 h-9 w-px bg-slate-200" />
                    )}
                  </div>
                  <div className="flex-1 rounded-xl bg-slate-50 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[12px] font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <span className="text-[10px] text-slate-500">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">
              Full history and filters will be available in the Audit Log
              section.
            </p>
          </CardContent>
        </Card>

        {/* Finance Overview donut */}
        <Card className="border-slate-100 bg-white shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-slate-900">
              Finance Overview
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Paid vs unpaid invoices (monthly).
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative h-40 w-40">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  backgroundImage: `conic-gradient(#059669 0% ${paid}%, #d1fae5 ${paid}% 100%)`,
                }}
              />
              <div className="absolute inset-3 rounded-full bg-white" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-xs text-slate-500">Paid</p>
                <p className="text-2xl font-semibold text-slate-900">
                  {paid}%
                </p>
                <p className="text-[11px] text-slate-500">
                  {unpaid}% unpaid
                </p>
              </div>
            </div>

            <div className="w-full space-y-2 text-[11px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  <span className="text-slate-700">Paid invoices</span>
                </div>
                <span className="font-medium text-slate-900">
                  {financeSummary.totalRevenue}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-200" />
                  <span className="text-slate-700">Outstanding</span>
                </div>
                <span className="font-medium text-slate-900">
                  {financeSummary.outstanding}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom row: Students snapshot + Finance bars */}
      <section className="grid gap-4 lg:grid-cols-3">
        {/* Students Snapshot */}
        <Card className="lg:col-span-2 border-slate-100 bg-white shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-slate-900">
              Students Snapshot
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Quick view of active, graduated, and pending students.
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-2 text-left text-[11px]">
                <thead className="text-[10px] uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-3 py-1">Name</th>
                    <th className="px-3 py-1">ID</th>
                    <th className="px-3 py-1">Program</th>
                    <th className="px-3 py-1">Year</th>
                    <th className="px-3 py-1 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsSnapshot.map((s) => (
                    <tr key={s.id}>
                      <td className="rounded-l-xl bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-900">
                        {s.name}
                      </td>
                      <td className="bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
                        {s.id}
                      </td>
                      <td className="bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
                        {s.program}
                      </td>
                      <td className="bg-slate-50 px-3 py-2 text-[11px] text-slate-600">
                        {s.year}
                      </td>
                      <td className="rounded-r-xl bg-slate-50 px-3 py-2 text-right">
                        <span
                          className={[
                            "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium",
                            s.status === "Active"
                              ? "bg-emerald-50 text-emerald-700"
                              : s.status === "Graduated"
                              ? "bg-sky-50 text-sky-700"
                              : "bg-amber-50 text-amber-700",
                          ].join(" ")}
                        >
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Finance Overview bars */}
        <Card className="border-slate-100 bg-white shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-slate-900">
              Finance Overview
            </CardTitle>
            <CardDescription className="text-xs text-slate-500">
              Monthly revenue trend for the current semester.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex h-full flex-col justify-between gap-4">
            <div className="mt-2 flex h-40 items-end justify-between gap-2 rounded-xl bg-slate-50 px-4 pb-4 pt-3">
              {financeBars.map((bar) => (
                <div key={bar.label} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="flex w-full items-end justify-center rounded-full bg-emerald-100"
                    style={{ height: `${bar.value}%` }}
                  >
                    <div className="mb-1 h-3/4 w-[70%] rounded-full bg-emerald-600" />
                  </div>
                  <span className="text-[10px] text-slate-500">
                    {bar.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <div className="space-y-0.5">
                <p className="text-slate-500">Total revenue this semester</p>
                <p className="text-sm font-semibold text-slate-900">
                  {financeSummary.totalRevenue}
                </p>
              </div>
              <div className="space-y-0.5 text-right">
                <p className="text-slate-500">Outstanding balance</p>
                <p className="text-sm font-semibold text-slate-900">
                  {financeSummary.outstanding}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
