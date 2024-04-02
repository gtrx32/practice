import { Dispatch, SetStateAction, createContext } from "react";

interface DataTableContextType {
  data: DataType[];
  setData?: Dispatch<SetStateAction<DataType[]>>;
}

const defaultState: DataTableContextType = {
  data: [],
  setData: () => {},
};

const DataTableContext = createContext<DataTableContextType>(defaultState);

export default DataTableContext;
