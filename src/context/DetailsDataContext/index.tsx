import { createContext } from "react";

interface DetailsDataContextType {
  data: DataType | null;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const defaultState: DetailsDataContextType = {
  data: null,
  relatedData: null,
  relatedPath: "",
};

const DetailsDataContext = createContext<DetailsDataContextType>(defaultState);

export default DetailsDataContext;
