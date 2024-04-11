import { PropsWithChildren } from "react";

export interface InputProps extends PropsWithChildren {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerName: any;
  maxWidth?: string;
}
