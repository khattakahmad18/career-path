import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
} & Omit<ComponentProps<typeof Link>, "href" | "children">;

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
