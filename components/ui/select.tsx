import { createContext, useContext, type ReactNode, type HTMLAttributes } from "react";

type SelectContextValue = {
  value?: string;
  onValueChange?: (value: string) => void;
};

const SelectContext = createContext<SelectContextValue>({});

export function Select({ value, onValueChange, children }: { value?: string; onValueChange?: (value: string) => void; children: ReactNode }) {
  return <SelectContext.Provider value={{ value, onValueChange }}>{children}</SelectContext.Provider>;
}

export function SelectTrigger({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={className}>{children}</div>;
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  const { value } = useContext(SelectContext);
  return <span>{value ?? placeholder ?? ""}</span>;
}

export function SelectContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function SelectItem({ value, children, className = "", ...props }: { value: string; children: ReactNode; className?: string } & HTMLAttributes<HTMLButtonElement>) {
  const { onValueChange } = useContext(SelectContext);
  return (
    <button type="button" className={className} onClick={() => onValueChange?.(value)} {...props}>
      {children}
    </button>
  );
}
