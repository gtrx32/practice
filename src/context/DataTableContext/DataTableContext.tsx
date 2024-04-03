import { Dispatch, SetStateAction, createContext } from "react";

interface DataTableContextType {
  data: DataType[];
  setData?: Dispatch<SetStateAction<DataType[]>>;
  relatedData: RelatedDataType[];
  setRelatedData?: Dispatch<SetStateAction<RelatedDataType[]>>;
}

const defaultState: DataTableContextType = {
  data: [],
  setData: () => {},
  relatedData: [],
  setRelatedData: () => {},
};

const DataTableContext = createContext<DataTableContextType>(defaultState);

export default DataTableContext;
