import s from "./Button.module.scss";
import clsx from "clsx";
import ButtonProps from "./types";
import { ReactElement, cloneElement } from "react";

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  if (props.asChild) {
    const { children } = props;

    return cloneElement(children as ReactElement, {
      className: clsx(s.button, className, children?.props.className),
    });
  }

  return <button className={clsx(s.button, className)} {...props} />;
};

export default Button;
