import s from "./SearchField.module.scss";
import clsx from "clsx";
import { useDebouncedState } from "@mantine/hooks";
import { useDataParams } from "../../../../hooks/useDataParams";
import { useEffect } from "react";

interface SearchFieldProps {
  className?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ className }) => {
  const { setParam, getParam } = useDataParams();
  const [value, setValue] = useDebouncedState(getParam("q"), 200);

  const searchFieldChangeHandler = ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  useEffect(() => {
    setParam("q", value);
  }, [value]);

  return (
    <input
      className={clsx(s.input, className)}
      defaultValue={value}
      onChange={searchFieldChangeHandler}
      placeholder="Поиск"
    />
  );
};

export default SearchField;
