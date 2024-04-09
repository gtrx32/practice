import { PropsWithChildren, useContext, useId } from "react";
import s from "./CheckBox.module.scss";
import clsx from "clsx";
import FormRegisterContext from "../../../context/FormRegisterContext/FormRegisterContext";

interface CheckBoxProps extends PropsWithChildren {
  className?: string;
  registerName?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ className, children, registerName }) => {
  const id = useId();
  const { register } = useContext(FormRegisterContext);

  return (
    <label className={s.wrapper} htmlFor={id}>
      <input
        id={id}
        {...(register && register(registerName as keyof DataType))}
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
