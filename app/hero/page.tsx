// app/hero/page.tsx
"use client";

import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Users,
  GraduationCap,
  Wallet,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// motion helper
const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut", delay },
});

const bottomStats = [
  { label: "Students", value: "10K+" },
  { label: "Courses", value: "500+" },
  { label: "Active Admins", value: "50+" },
  { label: "Uptime", value: "99.9%" },
];

export default function HeroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-700 via-teal-700 to-sky-900 text-white">
      {/* soft background shapes */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl" />
        <div className="absolute right-[-80px] top-32 h-80 w-80 rounded-full bg-sky-500/40 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/4 h-80 w-80 rounded-full bg-lime-400/30 blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:px-6 lg:py-20">
        {/* Left side */}
        <div className="z-10 flex-1 space-y-6">
          <motion.p
            {...fadeUp(0.02)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/90"
          >
            HUMS – Hormuud University Management System
          </motion.p>

          <motion.div {...fadeUp(0.06)} className="space-y-3">
            <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              The Ultimate Platform
              <span className="block text-emerald-100">
                for University Operations.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-emerald-50/80 sm:text-base">
              HUMS helps universities manage{" "}
              <span className="font-medium text-white">
                students, classes, exams, finance, results, and academic
                operations
              </span>{" "}
              — all in one unified, secure system built for modern campuses.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.12)}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/">
              <Button
                size="lg"
                className="group w-full justify-between gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 sm:w-auto"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full border-emerald-200/60 bg-emerald-50/10 text-sm text-emerald-50 backdrop-blur hover:bg-emerald-50/20 sm:w-auto"
              >
                View Dashboard
              </Button>
            </Link>
          </motion.div>

          {/* small icon row like in the design */}
          <motion.div
            {...fadeUp(0.18)}
            className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-emerald-50/80"
          >
            <Feature icon={<Users className="h-3.5 w-3.5" />} label="Student lifecycle" />
            <Feature icon={<GraduationCap className="h-3.5 w-3.5" />} label="Academic structure" />
            <Feature icon={<Activity className="h-3.5 w-3.5" />} label="Real-time analytics" />
            <Feature icon={<Wallet className="h-3.5 w-3.5" />} label="Finance-ready" />
          </motion.div>
        </div>

        {/* Right side: glass enrollment card */}
        <motion.div
          {...fadeUp(0.1)}
          className="z-10 flex-1"
        >
          <Card className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-emerald-100/30 bg-emerald-50/5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            {/* subtle glow */}
            <div className="pointer-events-none absolute inset-x-10 top-0 h-10 rounded-b-full bg-emerald-300/40 blur-xl" />

            <CardHeader className="relative flex flex-row items-center justify-between border-b border-emerald-100/20 pb-3">
              <div>
                <CardTitle className="text-sm font-semibold text-emerald-50">
                  Enrollment Trend
                </CardTitle>
                <p className="text-[11px] text-emerald-100/70">
                  Live snapshot for Main Admin
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-emerald-100/70">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Live
              </div>
            </CardHeader>

            <CardContent className="relative space-y-4 pt-4">
              {/* Fake chart */}
              <div className="relative h-40 overflow-hidden rounded-2xl bg-gradient-to-t from-emerald-900/40 via-emerald-700/40 to-emerald-500/30 ring-1 ring-emerald-200/30">
                {/* grid lines */}
                <div className="absolute inset-0">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-x-0 border-t border-emerald-200/15"
                      style={{ top: `${(i + 1) * 20}%` }}
                    />
                  ))}
                </div>
                {/* area curve approximation */}
                <div className="absolute inset-x-4 bottom-0 flex items-end gap-3">
                  <div className="h-10 flex-1 rounded-t-xl bg-emerald-400/60" />
                  <div className="h-16 flex-1 rounded-t-xl bg-emerald-300/70" />
                  <div className="h-24 flex-1 rounded-t-xl bg-emerald-200/80" />
                  <div className="h-32 flex-1 rounded-t-xl bg-emerald-100/90" />
                </div>
                {/* glowing dot */}
                <div className="absolute right-10 top-6 h-3 w-3 rounded-full bg-emerald-200 shadow-[0_0_18px_rgba(190,242,100,0.9)]" />
              </div>

              {/* KPI row inside card */}
              <div className="grid grid-cols-2 gap-3 text-[11px] text-emerald-50">
                <Stat label="Students managed" value="10K+" />
                <Stat label="Modules connected" value="500+" />
                <Stat label="Daily active" value="500+" />
                <Stat label="Exam pass rate" value="99%" />
              </div>

              {/* Secure badge */}
              <div className="flex items-center gap-2 rounded-xl bg-emerald-900/40 px-3 py-2 text-[11px] text-emerald-50/80 ring-1 ring-emerald-300/30">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                <p>
                  Enterprise-grade RBAC with{" "}
                  <span className="font-semibold text-emerald-50">
                    MAIN_ADMIN
                  </span>{" "}
                  control over all university operations.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* bottom little stats strip, like a subtle footer for hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <div className="flex flex-wrap gap-4 rounded-2xl border border-emerald-200/20 bg-emerald-900/30 px-5 py-3 text-[11px] text-emerald-50/80 backdrop-blur">
          {bottomStats.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-sm font-semibold text-emerald-100">
                {item.value}
              </span>
              <span className="text-emerald-100/70">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/40 px-3 py-1 ring-1 ring-emerald-300/30">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/30">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-emerald-900/40 px-3 py-2 ring-1 ring-emerald-300/30">
      <p className="text-xs font-semibold text-emerald-50">{value}</p>
      <p className="mt-0.5 text-[10px] text-emerald-100/70">{label}</p>
    </div>
  );
}
