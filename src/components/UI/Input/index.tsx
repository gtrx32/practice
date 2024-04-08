import { PropsWithChildren, useId } from "react";
import s from "./Input.module.scss";
import clsx from "clsx";

interface InputProps extends PropsWithChildren {
  width?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ width = "100%", className, children }) => {
  const id = useId();

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <label htmlFor={id}>
        <div className={s.label}>{children}</div>
      </label>
      <input id={id} className={clsx(s.input, className)} placeholder="Введите данные"></input>
    </div>
  );
};

export default Input;
