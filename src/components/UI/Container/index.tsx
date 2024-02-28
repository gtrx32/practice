import { ComponentPropsWithRef } from "react";
import s from "./Container.module.scss";
import clsx from "clsx";

interface ContainerProps extends ComponentPropsWithRef<"div"> {
  as?: "div" | "section" | "span" | "header";
}

const Container: React.FC<ContainerProps> = ({ className, as = "div", ...props }) => {
  const Tag = as;

  return <Tag className={clsx(s.container, className)} {...props} />;
};

export default Container;
