import clsx from "clsx";
import { PropsWithChildren, useId } from "react";
import s from "./TextArea.module.scss";

interface TextAreaProps extends PropsWithChildren {
  width?: string;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ width = "100%", className, children }) => {
  const id = useId();

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <label htmlFor={id}>
        <div className={s.label}>{children}</div>
      </label>
      <textarea
        id={id}
        className={clsx(s.input, className)}
        placeholder="Введите данные"
        style={{ height: "100px" }}
      ></textarea>
    </div>
  );
};

export default TextArea;
