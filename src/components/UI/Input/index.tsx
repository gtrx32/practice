import s from "./Input.module.scss";
import { useId } from "react";
import { InputProps } from "./types";
import { useController, useFormContext } from "react-hook-form";

const Input: React.FC<InputProps> = ({ maxWidth = "890px", children, registerName }) => {
  const id = useId();

  const { control } = useFormContext<FormData>();

  const {
    field,
    fieldState: { error },
  } = useController({ name: registerName, control, defaultValue: "" });

  return (
    <div className={s.wrapper} style={{ maxWidth }}>
      <label className={s.label} htmlFor={id}>
        <div className={s.labelText}>{children}</div>
        {error?.message && <p className={s.error}>{error.message}</p>}
      </label>
      <input id={id} {...field} className={s.input} placeholder="Введите данные"></input>
    </div>
  );
};

export default Input;
