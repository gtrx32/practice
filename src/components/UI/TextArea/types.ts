import { PropsWithChildren } from "react";

export interface TextAreaProps extends PropsWithChildren {
  defaultValue?: string | number;
  width?: string;
  onChange?: (value: string) => void;
}
