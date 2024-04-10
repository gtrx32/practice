import s from "./CheckBox.module.scss";
import { useId } from "react";
import { useFormContext } from "react-hook-form";
import { CheckBoxProps } from "./types";

const CheckBox: React.FC<CheckBoxProps> = ({ registerName, children }) => {
  const id = useId();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <label className={s.wrapper} htmlFor={id}>
      <input
        id={id}
        {...(control && control.register(registerName as keyof DataType))}
        type="checkbox"
        className={s.input}
      />
      <label className={s.checkbox} htmlFor={id}>
        <div className={s.dot} />
      </label>
      <label className={s.label} htmlFor={id}>
        {children}
      </label>
      {errors[registerName]?.message && <p className={s.error}>{errors[registerName]?.message as string}</p>}
    </label>
  );
};
export default CheckBox;
