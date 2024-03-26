import { useState } from "react";
import { MultiSelect, Option } from "react-multi-select-component";
import s from "./FilterSelect.module.scss";
import Button from "../../../../components/UI/Button";
import { CloseFilterIcon } from "../../../../assets/images/icons";
import { useLocation, useNavigate } from "react-router-dom";

interface FilterSelectProps {
  options: Option[];
  placeholder: string;
  onChange: (value: Option[]) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ options, placeholder, onChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const myParam = Number(new URLSearchParams(location.search).get("id"));

  const [selectedOptions, setSelectedOptions] = useState<Option[]>(myParam ? [{ value: myParam, label: "" }] : []);

  const onChangeHandler = (selectedOptions: Option[]) => {
    setSelectedOptions(selectedOptions);
    if (onChange) onChange(selectedOptions);
    navigate(window.location.pathname, { replace: true });
  };

  return (
    <div className={s.wrapper}>
      <MultiSelect
        className={s.select}
        options={options}
        value={selectedOptions}
        onChange={onChangeHandler}
        labelledBy="Select"
        valueRenderer={() => <span className={s.placeholder}>{placeholder}</span>}
        ClearSelectedIcon={null}
        hasSelectAll={false}
        disableSearch
      />
      {selectedOptions.length > 0 && (
        <Button onClick={() => onChangeHandler([])}>
          <CloseFilterIcon />
        </Button>
      )}
    </div>
  );
};

export default FilterSelect;
