import { PropsWithChildren } from "react";

export interface InputProps extends PropsWithChildren {
  defaultValue?: string | number;
  width?: string;
  className?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => void;
}
