import s from "./CheckBox.module.scss";
import { useId } from "react";
import { useController, useFormContext } from "react-hook-form";
import { CheckBoxProps } from "./types";

const CheckBox: React.FC<CheckBoxProps> = ({ registerName, children }) => {
  const id = useId();

  const { control } = useFormContext<FormData>();

  const {
    field,
    fieldState: { error },
  } = useController({ name: registerName, control, defaultValue: false });

  return (
    <div className={s.wrapper}>
      <input id={id} {...field} type="checkbox" className={s.input} />
      <label className={s.checkbox} htmlFor={id}>
        <div className={s.dot} />
      </label>
      <label className={s.label} htmlFor={id}>
        {children}
      </label>
      {error?.message && <p className={s.error}>{error.message}</p>}
    </div>
  );
};
export default CheckBox;
