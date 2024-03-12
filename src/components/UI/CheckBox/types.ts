import { PropsWithChildren } from "react";

export interface CheckBoxProps extends PropsWithChildren {
  defaultValue?: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}
