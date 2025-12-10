import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
  href: string;
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-transform duration-150 ease-out hover:-translate-y-0.5";

  const styles = {
    primary:
      "bg-lumafin-gradient text-white shadow-glow-lg shadow-slate-900/15 px-6 py-2.5",
    secondary:
      "border border-slate-200/80 bg-white/80 px-6 py-2.5 text-slate-900 hover:border-slate-300",
    ghost:
      "px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent"
  };

  return (
    <Link
      href={href}
      className={cn(base, styles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}

