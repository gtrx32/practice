import { useState } from "react";
import s from "./SearchField.module.scss";
import clsx from "clsx";

interface SearchFieldProps {
  className?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ className }) => {
  const [input, setInput] = useState("");

  const searchFieldChangeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };

  return (
    <input
      className={clsx(s.input, className)}
      value={input}
      onChange={searchFieldChangeHandler}
      placeholder="Поиск"
    ></input>
  );
};

export default SearchField;
