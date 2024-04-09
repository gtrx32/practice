import { PropsWithChildren, useContext, useId } from "react";
import s from "./TextArea.module.scss";
import clsx from "clsx";
import FormRegisterContext from "../../../context/FormRegisterContext/FormRegisterContext";

interface TextAreaProps extends PropsWithChildren {
  width?: string;
  className?: string;
  registerName?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ width = "100%", className, children, registerName }) => {
  const id = useId();
  const { register } = useContext(FormRegisterContext);

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <label htmlFor={id}>
        <div className={s.label}>{children}</div>
      </label>
      <textarea
        id={id}
        {...(register && register(registerName as keyof DataType))}
        className={clsx(s.input, className)}
        placeholder="Введите данные"
        style={{ height: "100px" }}
      ></textarea>
    </div>
  );
};

export default TextArea;
