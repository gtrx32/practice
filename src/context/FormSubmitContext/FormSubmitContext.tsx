import { createContext } from "react";

interface FormSubmitContextType {
  onSave: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

const defaultState: FormSubmitContextType = {
  onSave: async () => {},
};

const FormSubmitContext = createContext<FormSubmitContextType>(defaultState);

export default FormSubmitContext;
