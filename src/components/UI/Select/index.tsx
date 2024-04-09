import s from "./Select.module.scss";
import clsx from "clsx";
import ReactSelect from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import { SelectProps, getValue } from "./types";

const Select: React.FC<SelectProps> = ({ options, registerName, placeholder, width = "100%", className, children }) => {
  const { control } = useFormContext();

  return (
    <div className={clsx(s.wrapper, className)} style={{ width: width }}>
      <div className={s.label}>{children}</div>
      <Controller
        name={registerName}
        control={control}
        rules={{ required: "Это обязательное поле" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <ReactSelect
            className={s.select}
            options={options}
            placeholder={placeholder}
            value={getValue(value, options)}
            onChange={(newValue) => onChange((newValue as SelectOption).value)}
          ></ReactSelect>
          /* нужно дописать валидацию*/
        )}
      />
    </div>
  );
};

export default Select;
