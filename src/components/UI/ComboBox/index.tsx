import clsx from "clsx";
import { PropsWithChildren, useEffect, useState } from "react";
import s from "./ComboBox.module.scss";

interface ComboBoxProps extends PropsWithChildren {
  options: number[] | undefined;
  placeholder: string;
  defaultValue?: number;
  width?: string;
  className?: string;
  onChange?: (value: number) => void;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  options,
  placeholder,
  defaultValue = placeholder,
  width = "100%",
  className,
  onChange,
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(target.value);
    onChange?.(parseInt(target.value));
  };

  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      <select className={s.select} value={selectedValue} onChange={onHandleChange}>
        <option value={placeholder} disabled hidden>
          {placeholder}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
