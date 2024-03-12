import { PropsWithChildren, useEffect, useState } from "react";
import s from "./TextBox.module.scss";
import clsx from "clsx";

interface TextBoxProps extends PropsWithChildren {
  defaultValue?: string;
  width?: string;
  textarea?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  defaultValue = "",
  width = "100%",
  textarea,
  className,
  onChange,
  children,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(target.value);
    onChange?.(target.value);
  };

  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      {textarea && (
        <textarea
          onChange={onHandleChange}
          value={value}
          className={s.input}
          placeholder="Введите данные"
          style={{ height: "100px" }}
        ></textarea>
      )}
      {!textarea && (
        <input onChange={onHandleChange} value={value} className={s.input} placeholder="Введите данные"></input>
      )}
    </div>
  );
};

export default TextBox;
