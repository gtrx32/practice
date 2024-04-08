import { PropsWithChildren, useId } from "react";
import s from "./CheckBox.module.scss";
import clsx from "clsx";

interface CheckBoxProps extends PropsWithChildren {
  className?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ className, children }) => {
  const id = useId();

  return (
    <label className={s.wrapper} htmlFor={id}>
      <input id={id} type="checkbox" className={clsx(s.input, className)} />
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
