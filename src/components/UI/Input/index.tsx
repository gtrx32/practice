import { useState } from "react";
import s from "./Input.module.scss";
import clsx from "clsx";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  defaultValue = "",
  width = "100%",
  className,
  onChange,
  children,
  validate,
}) => {
  const [value, setValue] = useState(defaultValue);

  const onHandleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(value);
    onChange?.(value);
    validate?.(value);
  };

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      <input
        onChange={onHandleChange}
        value={value}
        className={clsx(s.input, className)}
        placeholder="Введите данные"
      ></input>
    </div>
  );
};

export default Input;
