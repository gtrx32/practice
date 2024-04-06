import { createContext } from "react";

interface DataTableContextType {
  data: DataType[];
  relatedData: RelatedDataType[];
}

const defaultState: DataTableContextType = {
  data: [],
  relatedData: [],
};

const DataTableContext = createContext<DataTableContextType>(defaultState);

export default DataTableContext;
