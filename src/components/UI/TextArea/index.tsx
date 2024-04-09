import s from "./TextArea.module.scss";
import clsx from "clsx";
import { useId } from "react";
import { TextAreaProps } from "./types";
import { useFormContext } from "react-hook-form";

const TextArea: React.FC<TextAreaProps> = ({ width = "100%", className, children, registerName }) => {
  const id = useId();
  const { control } = useFormContext();

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <label htmlFor={id}>
        <div className={s.label}>{children}</div>
      </label>
      <textarea
        id={id}
        {...(control && control.register(registerName as keyof DataType))}
        className={clsx(s.input, className)}
        placeholder="Введите данные"
        style={{ height: "100px" }} /*убрать в стили */
      ></textarea>
      /* нужно дописать валидацию*/
    </div>
  );
};

export default TextArea;
