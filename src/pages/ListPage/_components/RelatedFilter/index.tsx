import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import s from "./RelatedFilter.module.scss";
import Button from "../../../../components/UI/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { CloseFilterIcon } from "../../../../assets/images/icons";

interface RelatedFilterProps {
  filters: SelectOption[];
  placeholder: string;
  onChange: (value: SelectOption[]) => void;
}

const RelatedFilter: React.FC<RelatedFilterProps> = ({ filters, placeholder, onChange }) => {
  const navigate = useNavigate();
  const idParam = new URLSearchParams(useLocation().search).get("id");

  const [selectedFilters, setSelectedFilters] = useState<SelectOption[]>(
    idParam ? idParam.split(",").map((id) => ({ value: Number(id), label: "" })) : []
  );

  useEffect(() => {
    if (onChange) onChange(selectedFilters);

    const newParams = new URLSearchParams();
    if (selectedFilters.length > 0)
      newParams.append("id", selectedFilters.map((option) => option.value.toString()).join(","));

    navigate(window.location.pathname + (newParams.toString() ? "?" + newParams.toString() : ""), { replace: true });
  }, [selectedFilters]);

  const onChangeHandler = (selectedOptions: SelectOption[]) => setSelectedFilters(selectedOptions);

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

export default RelatedFilter;
