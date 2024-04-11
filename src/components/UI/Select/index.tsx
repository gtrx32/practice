import s from "./Select.module.scss";
import ReactSelect from "react-select";
import { Controller, useController, useFormContext } from "react-hook-form";
import { SelectProps, getValue } from "./types";

const Select: React.FC<SelectProps> = ({ options, registerName, placeholder, children }) => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({ name: registerName, control, defaultValue: "" });

  return (
    <div className={s.wrapper}>
      <div className={s.label}>
        <div className={s.labelText}>{children}</div>
        {error?.message && <p className={s.error}>{error.message}</p>}
      </div>{" "}
      <Controller
        name={registerName}
        control={control}
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            {...field}
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
