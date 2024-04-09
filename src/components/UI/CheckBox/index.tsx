import s from "./CheckBox.module.scss";
import clsx from "clsx";
import { useId } from "react";
import { useFormContext } from "react-hook-form";
import { CheckBoxProps } from "./types";

const CheckBox: React.FC<CheckBoxProps> = ({ className, registerName, children }) => {
  const id = useId();
  const { control } = useFormContext();

  return (
    <label className={s.wrapper} htmlFor={id}>
      <input
        id={id}
        {...(control && control.register(registerName as keyof DataType))}
        type="checkbox"
        className={clsx(s.input, className)}
      />
      <label className={s.checkbox} htmlFor={id}>
        <div className={s.dot} />
      </label>
      <label className={s.label} htmlFor={id}>
        {children}
      </label>
    </label>
  );
};
export default CheckBox;
