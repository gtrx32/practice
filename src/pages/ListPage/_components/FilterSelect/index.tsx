import { useState } from "react";
import { MultiSelect, Option } from "react-multi-select-component";
import s from "./FilterSelect.module.scss";
import Button from "../../../../components/UI/Button";
import { CloseFilterIcon } from "../../../../assets/images/icons";

interface FilterSelectProps {
  options: Option[];
  placeholder: string;
  onChange: (value: Option[]) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ options, placeholder, onChange }) => {
  const [selected, setSelected] = useState<Option[]>([]);

  const onChangeHandler = (selectedOptions: Option[]) => {
    setSelected(selectedOptions);
    if (onChange) onChange(selectedOptions);
  };

  return (
    <div className={s.wrapper}>
      <MultiSelect
        className={s.select}
        options={options}
        value={selected}
        onChange={onChangeHandler}
        labelledBy="Select"
        valueRenderer={() => <span className={s.placeholder}>{placeholder}</span>}
        ClearSelectedIcon={null}
        hasSelectAll={false}
        disableSearch
      />
      {selected.length > 0 && (
        <Button onClick={() => setSelected([])}>
          <CloseFilterIcon />
        </Button>
      )}
    </div>
  );
};

export default FilterSelect;
