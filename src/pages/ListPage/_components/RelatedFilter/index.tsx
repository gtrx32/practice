import { useContext, useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import s from "./RelatedFilter.module.scss";
import Button from "../../../../components/UI/Button";
import { CloseFilterIcon } from "../../../../assets/images/icons";
import PageContext from "../../../../context/PageContext";
import { useDataParams } from "../../../../hooks/useDataParams";
import getFilterName from "./types";

interface RelatedFilterProps {
  filters: SelectOption[];
  placeholder: string;
}

const RelatedFilter: React.FC<RelatedFilterProps> = ({ filters, placeholder }) => {
  const { resourceName } = useContext(PageContext);
  const { setParamValues, getParamValues } = useDataParams();

  const filterName = getFilterName(resourceName);
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>(
    getParamValues(filterName).map((value) => ({ value, label: value.toString() }))
  );

  const onChangeHandler = (selectedOptions: SelectOption[]) => setSelectedOptions(selectedOptions);

  useEffect(() => {
    setParamValues(
      filterName,
      selectedOptions.map((option) => option.value)
    );
  }, [selectedOptions]);

  return (
    <div className={s.wrapper}>
      <MultiSelect
        className={s.select}
        options={filters}
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

export default RelatedFilter;
