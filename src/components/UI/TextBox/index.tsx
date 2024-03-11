import { PropsWithChildren } from "react";
import s from "./TextBox.module.scss";
import clsx from "clsx";

interface TextBoxProps extends PropsWithChildren {
  className?: string;
  width?: string;
  height?: string;
  textarea?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({ className, children, width = "100%", textarea }) => {
  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      {textarea && <textarea className={s.input} placeholder="Введите данные" style={{ height: "100px" }}></textarea>}
      {!textarea && <input className={s.input} placeholder="Введите данные"></input>}
    </div>
  );
};

export default TextBox;
