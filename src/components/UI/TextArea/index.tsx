import s from "./TextArea.module.scss";
import { useId } from "react";
import { TextAreaProps } from "./types";
import { useController, useFormContext } from "react-hook-form";

const TextArea: React.FC<TextAreaProps> = ({ children, registerName }) => {
  const id = useId();

  const { control } = useFormContext<FormData>();

  const {
    field,
    fieldState: { error },
  } = useController({ name: registerName, control, defaultValue: "" });

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor={id}>
        <div className={s.labelText}>{children}</div>
        {error?.message && <p className={s.error}>{error.message}</p>}
      </label>
      <textarea id={id} {...field} className={s.input} placeholder="Введите данные"></textarea>
    </div>
  );
};

export default TextArea;
