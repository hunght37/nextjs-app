"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="font-bold">
              Todo App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/profile">Hồ sơ</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Đăng xuất</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container py-6 px-4 md:py-10">
        {children}
      </main>
    </div>
  );
}