import { Dispatch, SetStateAction, createContext } from "react";

interface CorrectInputContextType {
  fields: Record<string, boolean>;
  setFields: Dispatch<SetStateAction<Record<string, boolean>>>;
  fieldsIsValid: () => boolean;
}

const defaultState: CorrectInputContextType = {
  fields: {},
  setFields: () => {},
  fieldsIsValid: () => false,
};

const CorrectInputContext = createContext<CorrectInputContextType>(defaultState);

export default CorrectInputContext;
