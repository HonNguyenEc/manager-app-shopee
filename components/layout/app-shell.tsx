import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopHeader } from "@/components/layout/top-header";

export function AppShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#eff6ff_0%,#f8fafc_40%,#f8fafc_100%)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1500px]">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <TopHeader title={title} />
          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
