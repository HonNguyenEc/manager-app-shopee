export function StatCard({
  title,
  value,
  helper,
  trend,
  tone = "neutral",
}: {
  title: string;
  value: string;
  helper: string;
  trend: string;
  tone?: "success" | "info" | "neutral";
}) {
  const toneClass =
    tone === "success"
      ? "text-emerald-700 bg-emerald-50"
      : tone === "info"
      ? "text-sky-700 bg-sky-50"
      : "text-slate-700 bg-slate-100";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">{helper}</p>
        <span className={`rounded-md px-2 py-1 text-[11px] font-medium ${toneClass}`}>
          {trend}
        </span>
      </div>
    </div>
  );
}
