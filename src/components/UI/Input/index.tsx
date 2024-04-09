import s from "./Input.module.scss";
import clsx from "clsx";
import { useId } from "react";
import { InputProps } from "./types";
import { useFormContext } from "react-hook-form";

const Input: React.FC<InputProps> = ({ width = "100%", className, children, registerName }) => {
  const id = useId();
  const { control } = useFormContext();

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <label htmlFor={id}>
        <div className={s.label}>{children}</div>
      </label>
      <input
        id={id}
        {...(control && control.register(registerName as keyof DataType))}
        className={clsx(s.input, className)}
        placeholder="Введите данные"
      ></input>
      /* нужно дописать валидацию*/
    </div>
  );
};

export default Input;
