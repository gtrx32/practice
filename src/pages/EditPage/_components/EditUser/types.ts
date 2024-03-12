import { UserType } from "../../types";

export interface EditUserProps {
  id: number;
}

export const initialValue: UserType = {
  id: 0,
  name: "",
  username: "",
  email: "",
  phone: "",
  address: {
    street: "",
    city: "",
    zipcode: "",
  },
  company: {
    name: "",
    catchPhrase: "",
  },
  website: "",
};
