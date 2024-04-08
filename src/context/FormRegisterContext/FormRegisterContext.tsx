import { createContext } from "react";
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

interface FormRegisterContextType {
  register: UseFormRegister<FieldValues> | null;
  formState: FormState<FieldValues> | null;
}

const defaultState: FormRegisterContextType = {
  register: null,
  formState: null,
};

const FormRegisterContext = createContext<FormRegisterContextType>(defaultState);

export default FormRegisterContext;
