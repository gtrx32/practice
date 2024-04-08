import { PropsWithChildren } from "react";
import s from "./Select.module.scss";
import clsx from "clsx";

interface SelectProps extends PropsWithChildren {
  options: { value: number; label: string }[];
  width?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ options, width = "100%", className, children }) => {
  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      <select className={s.select}>
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
