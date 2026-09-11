import type { ReactNode } from 'react';

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className="status-dot" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-vexis-green">
        {children}
      </span>
    </div>
  );
}
