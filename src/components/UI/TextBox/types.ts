import { PropsWithChildren } from "react";

export interface TextBoxProps extends PropsWithChildren {
  defaultValue?: string | number;
  width?: string;
  textarea?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}
