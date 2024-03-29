import { useEffect, useId, useState } from "react";
import s from "./CheckBox.module.scss";
import clsx from "clsx";
import { CheckBoxProps } from "./types";

const CheckBox: React.FC<CheckBoxProps> = ({ defaultValue = false, className, onChange, children }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);
  const id = useId();

  useEffect(() => {
    setIsChecked(defaultValue);
  }, [defaultValue]);

  const toggleCheckbox = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(target.checked);
    onChange?.(target.checked);
  };

  return (
    <label className={s.wrapper} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        className={clsx(s.checkbox, className)}
      />
      {children}
    </label>
  );
};
export default CheckBox;
