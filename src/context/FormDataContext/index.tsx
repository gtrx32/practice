import { createContext } from "react";

interface FormDataContextType {
  data?: DataType | null;
  relatedData: RelatedDataType[];
}

const defaultState: FormDataContextType = {
  data: null,
  relatedData: [],
};

const FormDataContext = createContext<FormDataContextType>(defaultState);

export default FormDataContext;
