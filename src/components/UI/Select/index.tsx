import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import s from "./Select.module.scss";
import { SelectProps } from "./types";
import CorrectInputContext from "../../../context/CorrectInputContext";

const Select: React.FC<SelectProps> = ({
  options,
  defaultLabel,
  defaultValue,
  width = "100%",
  className,
  onChange,
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const { setFields } = useContext(CorrectInputContext);
  const [isCorrect, setIsCorrect] = useState(!!defaultValue);

  useEffect(() => {
    setFields((prev) => ({ ...prev, select: isCorrect }));
  }, [isCorrect]);

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(parseInt(target.value));
    onChange?.(parseInt(target.value));
    setIsCorrect(true);
  };

  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      <select
        className={clsx(s.select, !isCorrect && s.notCorrect)}
        value={selectedValue || ""}
        onChange={onHandleChange}
      >
        <option value="" disabled hidden>
          {defaultLabel}
        </option>
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
