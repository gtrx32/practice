import { PropsWithChildren, useState } from "react";
import s from "./CheckBox.module.scss";
import clsx from "clsx";

interface CheckBoxProps extends PropsWithChildren {
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ children, className }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={s.wrapper}>
      <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className={clsx(s.checkbox, className)} />
      {children}
    </div>
  );
};
export default CheckBox;
