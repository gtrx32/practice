import clsx from "clsx";
import { PropsWithChildren, useState } from "react";
import s from "./ComboBox.module.scss";

interface ComboBoxProps extends PropsWithChildren {
  options: string[]; // Добавляем свойство options типа string[]
  placeholder: string;
  className?: string;
  width?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, placeholder, children, className, width = "100%" }) => {
  const [selectedValue, setSelectedValue] = useState(placeholder);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(value);
  };

  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      <select className={s.select} value={selectedValue} onChange={handleChange}>
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
