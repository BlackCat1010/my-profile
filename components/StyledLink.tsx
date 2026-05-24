import { ReactNode } from "react";

interface StyledLinkProps {
  href: string;
  children: ReactNode;
  download?: boolean;
  icon?: ReactNode;
}

export default function StyledLink({ href, children, download, icon }: StyledLinkProps) {
  return (
    <a
      href={href}
      download={download}
      className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-400 transition-all hover:border-slate-400 hover:bg-slate-900 hover:text-slate-200 hover:shadow-lg hover:shadow-slate-700/30"
    >
      {icon}
      {children}
    </a>
  );
}