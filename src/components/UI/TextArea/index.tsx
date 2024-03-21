import clsx from "clsx";
import { useId, useState } from "react";
import s from "./TextArea.module.scss";
import { TextAreaProps } from "./types";

const TextArea: React.FC<TextAreaProps> = ({ defaultValue = "", width = "100%", onChange, children }) => {
  const [value, setValue] = useState(defaultValue);
  const id = useId();

  const onHandleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <div className={clsx(s.wrapper)} style={{ width: width }}>
      <label htmlFor={id}>
        <div className={s.label}>{children}</div>
      </label>
      <textarea
        onChange={onHandleChange}
        value={value}
        id={id}
        className={s.input}
        placeholder="Введите данные"
        style={{ height: "100px" }}
      ></textarea>
    </div>
  );
};

export default TextArea;
