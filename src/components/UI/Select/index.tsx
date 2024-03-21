import clsx from "clsx";
import { useEffect, useState } from "react";
import s from "./Select.module.scss";
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({
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

export default Select;
