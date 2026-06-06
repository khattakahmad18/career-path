import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  iconWrapperClassName?: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
  iconWrapperClassName = "",
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div
        className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 ${iconWrapperClassName}`}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
