import { createContext } from "react";

interface ListDataContextType {
  data: DataType[];
  relatedData: RelatedDataType[];
}

const defaultState: ListDataContextType = {
  data: [],
  relatedData: [],
};

const ListDataContext = createContext<ListDataContextType>(defaultState);

export default ListDataContext;
