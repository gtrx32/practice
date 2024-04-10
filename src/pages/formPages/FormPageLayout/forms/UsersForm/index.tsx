import Input from "../../../../../components/UI/Input";
import { useContext } from "react";
import { z } from "zod";
import SaveButton from "../../../../../components/UI/SaveButton";
import TextArea from "../../../../../components/UI/TextArea";
import FormSubmitContext from "../../../../../context/FormSubmitContext/FormSubmitContext";
import s from "../_shared/shared.module.scss";

export const usersSchema = z.object({
  name: z.string().min(1, { message: "Это обязательное поле" }),
  username: z.string().min(1, { message: "Это обязательное поле" }),
  email: z.string().min(1, { message: "Это обязательное поле" }).email("Некорректный адрес электронной почты"),
  website: z
    .string()
    .min(1, { message: "Это обязательное поле" })
    .regex(/^((ftp|http|https):\/\/)?(www\.)?([A-z]+)\.([A-z]{2,})/, { message: "Некорректный URL-адрес" }),
  phone: z
    .string()
    .min(1, { message: "Это обязательное поле" })
    .regex(/^(?:(?:\d{1,2}-)?\(?\d{3}\)?[-. ]?)?\d{3}[-. ]?\d{4}(?:\s*(?:x|ext)\s*\d+)?$/, {
      message: "Некорректный номер телефона",
    }),
  address: z.object({
    zipcode: z
      .string()
      .min(1, { message: "Это обязательное поле" })
      .regex(/^\d{5}-?\d{0,4}$/, { message: "Некорректный индекс" }),
    city: z.string().min(1, { message: "Это обязательное поле" }),
    street: z.string().min(1, { message: "Это обязательное поле" }),
  }),
  company: z.object({
    name: z.string().min(1, { message: "Это обязательное поле" }),
  }),
});

const UsersForm = () => {
  const { onSave } = useContext(FormSubmitContext);

  return (
    <form onSubmit={onSave}>
      <div className={s.block}>
        <Input registerName="name" maxWidth="440px">
          ФИО
        </Input>
        <Input registerName="username" maxWidth="440px">
          Никнейм
        </Input>
        <Input registerName="email" maxWidth="440px">
          Email
        </Input>
        <Input registerName="website" maxWidth="440px">
          Вебсайт
        </Input>
        <Input registerName="phone" maxWidth="440px">
          Телефон
        </Input>
      </div>
      <div className={s.block}>
        <p className={s.blockHeader}>Адрес</p>
        <Input registerName="address.zipcode" maxWidth="440px">
          Индекс
        </Input>
        <Input registerName="address.city" maxWidth="440px">
          Город
        </Input>
        <Input registerName="address.street">Улица</Input>
      </div>
      <div className={s.block}>
        <p className={s.blockHeader}>Компания</p>
        <Input registerName="company.name">Название</Input>
        <TextArea registerName="company.catchPhrase">Описание</TextArea>
      </div>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default UsersForm;
