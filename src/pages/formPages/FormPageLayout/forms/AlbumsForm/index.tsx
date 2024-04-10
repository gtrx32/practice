import { z } from "zod";
import SaveButton from "../../../../../components/UI/SaveButton";
import { useContext } from "react";
import FormDataContext from "../../../../../context/FormDataContext/FormDataContext";
import FormSubmitContext from "../../../../../context/FormSubmitContext/FormSubmitContext";
import Input from "../../../../../components/UI/Input";
import Select from "../../../../../components/UI/Select";

export const albumsSchema = z.object({
  title: z.string().min(1, { message: "Это обязательное поле" }),
  userId: z.number().min(1, { message: "Это обязательное поле" }),
});

const AlbumsForm = () => {
  const { onSave } = useContext(FormSubmitContext);
  const { relatedData } = useContext(FormDataContext);

  return (
    <form onSubmit={onSave}>
      <Select
        placeholder="Владелец"
        registerName="userId"
        options={(relatedData as UserType[]).map((item) => ({ value: item.id, label: item.name }))}
      >
        Выберите владельца
      </Select>
      <Input registerName="title">Название</Input>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default AlbumsForm;
