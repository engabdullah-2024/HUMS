import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { QueryProvider } from "./_components/providers/query-provider";
import { Header } from "./_components/Header"; // ✅ CALL HEADER HERE

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUMS – Hormuud University Management System",
  description: "Modern university management platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-slate-900`}
      >
        <QueryProvider>
          {/* 🔥 Global Header */}
          <Header />

          {/* 🔥 Page content */}
          <div className="min-h-screen pb-14 md:pb-0">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
