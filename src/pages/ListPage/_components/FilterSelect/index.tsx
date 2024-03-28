import { useState, useEffect } from "react";
import { MultiSelect, Option } from "react-multi-select-component";
import s from "./FilterSelect.module.scss";
import Button from "../../../../components/UI/Button";
import { CloseFilterIcon } from "../../../../assets/images/icons";
import { useLocation, useNavigate } from "react-router-dom";

interface FilterSelectProps {
  filters: Option[];
  placeholder: string;
  onChange: (value: Option[]) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ filters, placeholder, onChange }) => {
  const navigate = useNavigate();
  const idParam = new URLSearchParams(useLocation().search).get("id");

  const [selectedFilters, setSelectedFilters] = useState<Option[]>(
    idParam ? idParam.split(",").map((id) => ({ value: Number(id), label: "" })) : []
  );

  useEffect(() => {
    if (onChange) onChange(selectedFilters);

    const newParams = new URLSearchParams();
    if (selectedFilters.length > 0)
      newParams.append("id", selectedFilters.map((option) => option.value.toString()).join(","));

    navigate(window.location.pathname + (newParams.toString() ? "?" + newParams.toString() : ""), { replace: true });
  }, [selectedFilters]);

  const onChangeHandler = (selectedOptions: Option[]) => setSelectedFilters(selectedOptions);

  return (
    <div className={s.wrapper}>
      <MultiSelect
        className={s.select}
        options={filters}
        value={selectedFilters}
        onChange={onChangeHandler}
        labelledBy="Select"
        valueRenderer={() => <span className={s.placeholder}>{placeholder}</span>}
        ClearSelectedIcon={null}
        hasSelectAll={false}
        disableSearch
      />
      {selectedFilters.length > 0 && (
        <Button onClick={() => onChangeHandler([])}>
          <CloseFilterIcon />
        </Button>
      )}
    </div>
  );
};

export default FilterSelect;
