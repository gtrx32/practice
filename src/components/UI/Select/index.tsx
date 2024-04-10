import s from "./Select.module.scss";
import ReactSelect from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import { SelectProps, getValue } from "./types";

const Select: React.FC<SelectProps> = ({ options, registerName, placeholder, children }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={s.wrapper}>
      <div className={s.label}>
        <div className={s.labelText}>{children}</div>
        {errors[registerName]?.message && <p className={s.error}>{errors[registerName]?.message as string}</p>}
      </div>
      <Controller
        name={registerName}
        control={control}
        rules={{ required: "Это обязательное поле" }}
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            className={s.select}
            options={options}
            placeholder={placeholder}
            value={getValue(value, options)}
            onChange={(newValue) => onChange((newValue as SelectOption).value)}
          ></ReactSelect>
        )}
      />
    </div>
  );
};

export default Select;
