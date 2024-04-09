import { PropsWithChildren, useContext, useId } from "react";
import s from "./Input.module.scss";
import clsx from "clsx";
import FormRegisterContext from "../../../context/FormRegisterContext/FormRegisterContext";

interface InputProps extends PropsWithChildren {
  width?: string;
  className?: string;
  registerName?: string;
}

const Input: React.FC<InputProps> = ({ width = "100%", className, children, registerName }) => {
  const id = useId();
  const { register } = useContext(FormRegisterContext);

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <label htmlFor={id}>
        <div className={s.label}>{children}</div>
      </label>
      <input
        id={id}
        {...(register && register(registerName as keyof DataType))}
        className={clsx(s.input, className)}
        placeholder="Введите данные"
      ></input>
    </div>
  );
};

export default Input;
