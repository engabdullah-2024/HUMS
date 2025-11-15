// app/contact/page.tsx
"use client";

import {
  Headset,
  Code2,
  Handshake,
  Clock,
  SunMedium,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-emerald-50">
      {/* soft background shapes */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />
        <div className="absolute right-[-80px] top-40 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-[-90px] left-1/4 h-72 w-72 rounded-full bg-emerald-900/40 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 lg:py-18 space-y-8">
        {/* Top glass hero */}
        <Card className="mx-auto max-w-3xl border-emerald-100/40 bg-emerald-50/10 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <CardContent className="py-6 text-center space-y-2">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-emerald-50">
              We&apos;re Here to Help
            </h1>
            <p className="text-sm text-emerald-100/85 max-w-xl mx-auto">
              Reach out for support, partnership, or general inquiries. Our team
              is ready to help you modernize university operations.
            </p>
          </CardContent>
        </Card>

        {/* Support types */}
        <div className="grid gap-4 md:grid-cols-3">
          <SupportCard
            icon={Headset}
            title="General Support"
            highlight="support@hums.so"
            description="Questions about features, billing, or general inquiries. Our team is ready to assist."
          />
          <SupportCard
            icon={Code2}
            title="Technical Support"
            highlight="tech@hums.so"
            description="Need help with API integrations, platform administration, or technical issues?"
          />
          <SupportCard
            icon={Handshake}
            title="Sales & Partnerships"
            highlight="partners@hums.so"
            description="Explore partnership opportunities or learn how HUMS can support your institution."
          />
        </div>

        {/* Form + support hours */}
        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr),minmax(0,1.3fr)]">
          {/* Contact form */}
          <Card className="border-emerald-100/60 bg-emerald-50/10 backdrop-blur-xl shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-base text-emerald-50">
                Contact Form
              </CardTitle>
              <CardDescription className="text-xs text-emerald-100/80">
                Share a few details and we&apos;ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="grid gap-3 md:grid-cols-2">
                <Field label="Full Name">
                  <Input
                    placeholder="Enter your full name"
                    className="h-9 border-emerald-100/50 bg-emerald-50/10 text-emerald-50 placeholder:text-emerald-100/60"
                  />
                </Field>
                <Field label="Email Address">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    className="h-9 border-emerald-100/50 bg-emerald-50/10 text-emerald-50 placeholder:text-emerald-100/60"
                  />
                </Field>
              </div>

              <Field label="Subject">
                <Input
                  placeholder="e.g. Demo request, billing question"
                  className="h-9 border-emerald-100/50 bg-emerald-50/10 text-emerald-50 placeholder:text-emerald-100/60"
                />
              </Field>

              <Field label="Message">
                <Textarea
                  rows={4}
                  placeholder="Tell us how we can help…"
                  className="border-emerald-100/50 bg-emerald-50/10 text-emerald-50 placeholder:text-emerald-100/60"
                />
              </Field>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2 text-[11px] text-emerald-100/85">
                  <Checkbox className="border-emerald-100/80 data-[state=checked]:bg-emerald-400 data-[state=checked]:text-emerald-950" />
                  <span>I agree to be contacted by the HUMS team.</span>
                </label>

                <Button className="inline-flex items-center gap-1 rounded-full bg-emerald-300 px-5 text-xs font-semibold text-emerald-950 hover:bg-emerald-200">
                  Send Message
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Support hours and info */}
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <InfoPill
                icon={Clock}
                title="Response Time"
                text="Under 24 hours"
              />
              <InfoPill
                icon={SunMedium}
                title="Support Hours"
                text="8AM – 10PM (EAT)"
              />
              <InfoPill
                icon={ShieldCheck}
                title="Priority Support"
                text="For registered universities"
              />
            </div>

            <Card className="border-emerald-100/50 bg-emerald-50/10 backdrop-blur-lg">
              <CardContent className="flex flex-col gap-3 p-4 text-xs text-emerald-50/90">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-200/20">
                    <MapPin className="h-4 w-4 text-emerald-100" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-50">
                      Based in Somalia, serving universities nationwide
                    </p>
                    <p className="mt-1 text-[11px]">
                      HUMS is built by local engineers for Somali institutions,
                      with deep understanding of your academic and operational
                      needs.
                    </p>
                  </div>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-3 py-1">
                    <Check className="h-3.5 w-3.5 text-emerald-200" />
                    Secure & compliant
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-3 py-1">
                    <Check className="h-3.5 w-3.5 text-emerald-200" />
                    University-first workflows
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-100/60 bg-emerald-50/15 backdrop-blur-lg">
              <CardContent className="p-4 text-xs text-emerald-50/90">
                <p>
                  Looking for documentation or FAQs? Visit our{" "}
                  <span className="underline underline-offset-2">
                    Help Center
                  </span>{" "}
                  (coming soon) for guides, tutorials, and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <Card className="mt-4 border-emerald-100/60 bg-emerald-50/15 text-center backdrop-blur-xl">
          <CardContent className="space-y-3 py-6">
            <p className="text-sm font-semibold text-emerald-50">
              Ready to modernize your university?
            </p>
            <p className="text-xs text-emerald-100/85">
              Let&apos;s talk about how HUMS can streamline your operations and
              support your growth.
            </p>
            <Button className="mt-1 rounded-full bg-emerald-300 px-6 text-xs font-semibold text-emerald-950 hover:bg-emerald-200">
              Contact HUMS Team
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

/* --- Small helpers --- */

function SupportCard({
  icon: Icon,
  title,
  highlight,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  highlight: string;
  description: string;
}) {
  return (
    <Card className="border-emerald-100/50 bg-emerald-50/15 shadow-md backdrop-blur-lg">
      <CardContent className="flex flex-col gap-3 p-4 text-xs text-emerald-50/90">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100/20">
            <Icon className="h-4 w-4 text-emerald-50" />
          </div>
          <CardTitle className="text-sm font-semibold text-emerald-50">
            {title}
          </CardTitle>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-emerald-50">
            {highlight}
          </p>
          <p className="mt-1 text-[11px] leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <Label className="text-[11px] text-emerald-50/85">{label}</Label>
      {children}
    </div>
  );
}

function InfoPill({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <Card className="border-emerald-100/60 bg-emerald-50/10 backdrop-blur-lg">
      <CardContent className="flex items-center gap-2 p-3 text-xs text-emerald-50/90">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-200/20">
          <Icon className="h-4 w-4 text-emerald-50" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-emerald-50">{title}</p>
          <p className="text-[11px] text-emerald-100/85">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
}
