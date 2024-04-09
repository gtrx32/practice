import { PropsWithChildren } from "react";

export interface TextAreaProps extends PropsWithChildren {
  registerName: string;
  width?: string;
  className?: string;
}
