import { logoutAction } from "@/app/actions/auth";

export function TopHeader({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          CommerceFlow • E-commerce Operations Platform
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-900">{title}</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 md:block">
          Last sync: 11:58 AM (GMT+7)
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Logout
          </button>
        </form>
      </div>
    </header>
  );
}
