type StatusVariant =
  | "success"
  | "warning"
  | "info"
  | "neutral"
  | "danger";

const variantClasses: Record<StatusVariant, string> = {
  success: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
  info: "bg-sky-50 text-sky-700 ring-sky-600/20",
  neutral: "bg-slate-100 text-slate-700 ring-slate-600/20",
  danger: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

export function StatusBadge({
  label,
  variant = "neutral",
}: {
  label: string;
  variant?: StatusVariant;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${variantClasses[variant]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {label}
    </span>
  );
}
