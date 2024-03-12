import { PropsWithChildren, useEffect, useState } from "react";
import s from "./CheckBox.module.scss";
import clsx from "clsx";

interface CheckBoxProps extends PropsWithChildren {
  defaultValue?: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}

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
    <div className={s.wrapper}>
      <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className={clsx(s.checkbox, className)} />
      {children}
    </div>
  );
};
export default CheckBox;
