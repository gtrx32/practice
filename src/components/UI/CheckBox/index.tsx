import { useEffect, useState } from "react";
import s from "./CheckBox.module.scss";
import clsx from "clsx";
import { CheckBoxProps } from "./types";

const CheckBox: React.FC<CheckBoxProps> = ({ defaultValue = false, className, onChange, children }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  useEffect(() => {
    setIsChecked(defaultValue);
  }, [defaultValue]);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    onChange?.(!isChecked);
  };

  return (
    <label className={s.wrapper} htmlFor="todocheck">
      <input
        id="todocheck"
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
