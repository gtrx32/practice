import { UserType } from "../../types";

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
