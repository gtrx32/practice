import { PropsWithChildren } from "react";

export interface ComboBoxProps extends PropsWithChildren {
  options: number[] | undefined;
  placeholder: string;
  defaultValue?: number;
  width?: string;
  className?: string;
  onChange?: (value: number) => void;
}
