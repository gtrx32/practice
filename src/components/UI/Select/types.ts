import { PropsWithChildren } from "react";

export interface SelectProps extends PropsWithChildren {
  options: number[] | undefined;
  placeholder: string;
  defaultValue?: number;
  width?: string;
  className?: string;
  onChange?: (value: number) => void;
}
