import s from "./Input.module.scss";
import { useId } from "react";
import { InputProps } from "./types";
import { useFormContext } from "react-hook-form";

const Input: React.FC<InputProps> = ({ width = "100%", children, registerName }) => {
  const id = useId();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={s.wrapper} style={{ width: width }}>
      <label className={s.label} htmlFor={id}>
        <div className={s.labelText}>{children}</div>
        {errors[registerName]?.message && <p className={s.error}>{errors[registerName]?.message as string}</p>}
      </label>
      <input
        id={id}
        {...(control && control.register(registerName as keyof DataType))}
        className={s.input}
        placeholder="Введите данные"
      ></input>
    </div>
  );
};

export default Input;
