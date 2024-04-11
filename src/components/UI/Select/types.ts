import { PropsWithChildren } from "react";

export interface SelectProps extends PropsWithChildren {
  options: SelectOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerName: any;
  placeholder: string;
}

export const getValue = (value: string, options: SelectOption[]) =>
  value ? options.find((option) => option.value === Number(value)) : "";
