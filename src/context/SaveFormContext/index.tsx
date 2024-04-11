import { createContext } from "react";

interface SaveFormContextType {
  onSave: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
}

const defaultState: SaveFormContextType = {
  onSave: async () => {},
};

const SaveFormContext = createContext<SaveFormContextType>(defaultState);

export default SaveFormContext;
