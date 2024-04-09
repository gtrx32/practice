import { createContext } from "react";
import { FormState, UseFormRegister } from "react-hook-form";

interface FormRegisterContextType {
  register: UseFormRegister<DataType> | null;
  formState: FormState<DataType> | null;
}

const defaultState: FormRegisterContextType = {
  register: null,
  formState: null,
};

const FormRegisterContext = createContext<FormRegisterContextType>(defaultState);

export default FormRegisterContext;
