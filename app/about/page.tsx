// app/about/page.tsx
import {
  Activity,
  BarChart3,
  Bot,
  Cog,
  Eye,
  GraduationCap,
  LayoutDashboard,
  LineChart,

  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const coreValues = [
  {
    icon: Cog,
    title: "Efficiency",
    description: "Streamlining workflows to save time for faculty and admin.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Providing clear, accessible data and processes for all stakeholders.",
  },
  {
    icon: Bot,
    title: "Automation",
    description:
      "Reducing manual work through intelligent automation and smart defaults.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Protecting sensitive academic and financial data with robust measures.",
  },
  {
    icon: LineChart,
    title: "Scalability",
    description:
      "Designed to grow seamlessly with your institution, from small to large.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Giving leadership real-time insights into enrolment, exams, and finance.",
  },
  {
    icon: Activity,
    title: "Accuracy",
    description:
      "Ensuring precise data management for grades, records, and payments.",
  },
  {
    icon: GraduationCap,
    title: "Student Success",
    description:
      "Keeping the student journey at the center of every process we design.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 md:flex-row md:items-center md:px-6 lg:py-20">
          {/* Left: text */}
          <div className="flex-1 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/90">
              About HUMS
            </p>
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Transforming University
              <span className="block">Management in Somalia.</span>
            </h1>
            <p className="max-w-xl text-sm text-emerald-50/90 sm:text-base">
              HUMS empowers educational institutions in Somalia with a modern,
              integrated platform designed for{" "}
              <span className="font-semibold text-white">
                efficiency, transparency, and growth
              </span>
              . From admissions to exams and finance, everything stays connected
              in one place.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-emerald-50/90">
              <Badge className="bg-emerald-900/70 text-emerald-50">
                Built for Somali universities
              </Badge>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-3 py-1">
                <ShieldCheck className="h-3.5 w-3.5" />
                RBAC-secured platform
              </span>
            </div>
          </div>

          {/* Right: floating dashboard card */}
          <div className="flex-1">
            <Card className="relative mx-auto max-w-md translate-y-2 overflow-hidden rounded-3xl border border-emerald-100/40 bg-emerald-50/10 shadow-[0_35px_80px_rgba(15,23,42,0.55)] backdrop-blur-xl">
              {/* soft glow & shadow */}
              <div className="pointer-events-none absolute inset-x-10 top-0 h-10 rounded-b-full bg-emerald-200/40 blur-xl" />
              <div className="pointer-events-none absolute -bottom-10 left-1/2 h-16 w-40 -translate-x-1/2 rounded-full bg-emerald-900/50 blur-2xl" />

              <CardHeader className="relative border-b border-emerald-100/20 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-sm font-semibold text-emerald-50">
                      Dashboard
                    </CardTitle>
                    <CardDescription className="text-[11px] text-emerald-100/80">
                      Enrollment trend & key metrics
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-100/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Live
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative space-y-4 pt-4">
                {/* pseudo chart */}
                <div className="relative h-32 overflow-hidden rounded-2xl bg-gradient-to-t from-emerald-900/40 via-emerald-700/40 to-emerald-400/40 ring-1 ring-emerald-200/40">
                  {/* grid lines */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-x-0 border-t border-emerald-200/20"
                        style={{ top: `${(i + 1) * 20}%` }}
                      />
                    ))}
                  </div>
                  {/* bars area */}
                  <div className="absolute inset-x-3 bottom-0 flex items-end gap-2">
                    <div className="h-8 flex-1 rounded-t-xl bg-emerald-300/70" />
                    <div className="h-12 flex-1 rounded-t-xl bg-emerald-200/80" />
                    <div className="h-16 flex-1 rounded-t-xl bg-emerald-100/90" />
                    <div className="h-20 flex-1 rounded-t-xl bg-emerald-50" />
                  </div>
                </div>

                {/* small cards */}
                <div className="grid gap-3 text-[11px] text-emerald-50 sm:grid-cols-2">
                  <MiniMetric label="Students enrolled" value="10K+" />
                  <MiniMetric label="Courses & sections" value="500+" />
                  <MiniMetric label="Departments onboarded" value="20+" />
                  <MiniMetric label="Exam pass rate" value="99%" />
                </div>

                <div className="grid gap-3 text-[11px] text-emerald-50 sm:grid-cols-2">
                  <MiniTag label="Admissions" />
                  <MiniTag label="Classes & timetables" />
                  <MiniTag label="Exams & results" />
                  <MiniTag label="Finance & billing" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Our Core Values
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            HUMS is designed around principles that matter most to universities
            in Somalia: clear processes, secure data, and reliable automation.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <Card
                key={value.title}
                className="border-slate-200 bg-white shadow-sm"
              >
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* WHAT HUMS MANAGES / WHY DIFFERENT / BUILT FOR SOMALIA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left column: What HUMS manages */}
          <div className="space-y-4 lg:col-span-2">
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-slate-900">
                  What HUMS Manages
                </CardTitle>
                <CardDescription className="text-xs text-slate-600">
                  A single platform for all core university workflows.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
                <ul className="space-y-2 text-xs">
                  <li>• Admissions and enrolment lifecycle</li>
                  <li>• Student profiles, records, and history</li>
                  <li>• Faculties, departments, and programs</li>
                  <li>• Courses, sections, and timetables</li>
                </ul>
                <ul className="space-y-2 text-xs">
                  <li>• Exams, grades, and GPA calculations</li>
                  <li>• Fee structures, invoices, and payments</li>
                  <li>• Multi-admin roles and permissions</li>
                  <li>• Audit logs for all critical actions</li>
                </ul>
              </CardContent>
            </Card>

            {/* Why different */}
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-slate-900">
                  Why HUMS is Different
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-xs text-slate-700 md:grid-cols-2">
                <FeatureBlock
                  title="Faster admin workflows"
                  description="Reduce manual paperwork with automated approvals, GPA calculations, and smart forms."
                  icon={Activity}
                />
                <FeatureBlock
                  title="Finance & billing"
                  description="Centralize fees, invoices, and payment status with clear reporting for finance teams."
                  icon={Wallet}
                />
              </CardContent>
            </Card>

            {/* Built for Somalia */}
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-slate-900">
                  Built for Universities in Somalia
                </CardTitle>
                <CardDescription className="text-xs text-slate-600">
                  Local context, modern technology.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-xs text-slate-700 md:grid-cols-2">
                <ul className="space-y-2">
                  <li>• Supports Somali & English language flows</li>
                  <li>• Aligned with local academic structures</li>
                  <li>• Designed for varying internet conditions</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Multi-campus and distance learning ready</li>
                  <li>• Future plans for national integrations</li>
                  <li className="flex items-center gap-2 pt-1">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Mogadishu, Somalia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right column: highlight cards + CTA */}
          <div className="space-y-4">
            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-slate-900">
                  Multi-role Dashboards
                </CardTitle>
                <CardDescription className="text-xs text-slate-600">
                  Tailored views for each role.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs text-slate-700">
                <p>
                  Main Admin, Finance Admin, Exams Admin, Department Heads, and
                  Teachers each get focused dashboards with only what they need.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <MiniRole label="Main Admin" />
                  <MiniRole label="Finance" />
                  <MiniRole label="Exams" />
                  <MiniRole label="Departments" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-slate-900">
                  Our Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs text-slate-700">
                <p>
                  HUMS is being crafted by Somali developers who understand the
                  daily realities of universities in the country and want to
                  build tools that match that reality.
                </p>
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-semibold text-emerald-800">
                    EA
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">
                      Eng Abdalla
                    </p>
                    <p className="text-[11px] text-slate-600">
                      Full-Stack Developer, HUMS & CampusOS
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="space-y-3 p-4 text-center">
                <h3 className="text-sm font-semibold text-emerald-900">
                  Get Started with HUMS
                </h3>
                <p className="text-[11px] text-emerald-800">
                  The modern way to manage your university — from admissions to
                  graduation.
                </p>
                <Button className="mt-1 w-full justify-center bg-emerald-600 text-white hover:bg-emerald-500">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Book a walkthrough
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Small helper components */

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-emerald-900/40 px-3 py-2 ring-1 ring-emerald-200/40">
      <p className="text-xs font-semibold text-emerald-50">{value}</p>
      <p className="mt-0.5 text-[10px] text-emerald-100/70">{label}</p>
    </div>
  );
}

function MiniTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-emerald-900/35 px-3 py-1 text-[10px] text-emerald-50 ring-1 ring-emerald-200/40">
      {label}
    </span>
  );
}

function FeatureBlock({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-3">
      <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
        <Icon className="h-4 w-4 text-emerald-600" />
      </div>
      <div>
        <p className="text-xs font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}

function MiniRole({ label }: { label: string }) {
  return (
    <div className="rounded-lg bg-white px-2.5 py-1.5 text-center text-[11px] text-slate-700 ring-1 ring-slate-200">
      {label}
    </div>
  );
}
