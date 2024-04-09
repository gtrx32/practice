import { PropsWithChildren } from "react";

export interface InputProps extends PropsWithChildren {
  registerName: string;
  width?: string;
  className?: string;
}
