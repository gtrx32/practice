import { PropsWithChildren } from "react";

export interface SelectProps extends PropsWithChildren {
  options: { value: number; label: string }[];
  defaultLabel: string;
  defaultValue?: number;
  width?: string;
  className?: string;
  onChange?: (value: number) => void;
}
