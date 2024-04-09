import { PropsWithChildren, useContext } from "react";
import s from "./Select.module.scss";
import clsx from "clsx";
import FormRegisterContext from "../../../context/FormRegisterContext/FormRegisterContext";

interface SelectProps extends PropsWithChildren {
  options: { value: number; label: string }[];
  width?: string;
  className?: string;
  registerName?: string;
}

const Select: React.FC<SelectProps> = ({ options, width = "100%", className, children, registerName }) => {
  const { register } = useContext(FormRegisterContext);

  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      <select className={s.select} {...(register && register(registerName as keyof DataType))}>
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
