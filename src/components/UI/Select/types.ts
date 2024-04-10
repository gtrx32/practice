import { PropsWithChildren } from "react";

export interface SelectProps extends PropsWithChildren {
  options: SelectOption[];
  registerName: string;
  placeholder: string;
  width?: string;
}

export const getValue = (value: string, options: SelectOption[]) =>
  value ? options.find((option) => option.value === Number(value)) : "";
