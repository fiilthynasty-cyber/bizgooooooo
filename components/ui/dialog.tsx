import type { HTMLAttributes, ReactNode } from "react";

export function Dialog({ children }: { open?: boolean; onOpenChange?: (open: boolean) => void; children: ReactNode }) {
  return <>{children}</>;
}

export function DialogTrigger({ children }: { asChild?: boolean; children: ReactNode }) {
  return <>{children}</>;
}

export function DialogContent({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />;
}

export function DialogHeader({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={className} {...props} />;
}

export function DialogTitle({ className = "", ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={className} {...props} />;
}
