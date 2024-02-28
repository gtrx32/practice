import { ComponentPropsWithRef, ReactElement } from "react";

type ButtonProps = ComponentPropsWithRef<"button"> & {
  className?: string;
} & (
    | {
        asChild: true;
        children: ReactElement<{ className?: string }>;
      }
    | {
        asChild?: false | undefined;
      }
  );

export default ButtonProps;
