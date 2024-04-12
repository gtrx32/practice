import { z } from "zod";
import SaveButton from "../../../../../components/UI/SaveButton";
import { useContext } from "react";
import FormDataContext from "../../../../../context/FormDataContext";
import SaveFormContext from "../../../../../context/SaveFormContext";
import Input from "../../../../../components/UI/Input";
import Select from "../../../../../components/UI/Select";
import s from "../_shared/shared.module.scss";

export const albumsSchema = z.object({
  title: z.string().min(1, { message: "Это обязательное поле" }),
  userId: z.any().refine((value) => value !== undefined && value !== "", { message: "Это обязательное поле" }),
});

const AlbumsForm = () => {
  const { onSave } = useContext(SaveFormContext);
  const { relatedData } = useContext(FormDataContext);

  return (
    <form className={s.form} onSubmit={onSave}>
      <div className={s.block}>
        <Select
          placeholder="Владелец"
          registerName="userId"
          options={(relatedData as UserType[]).map((item) => ({ value: item.id, label: item.name }))}
        >
          Выберите владельца
        </Select>
        <Input registerName="title">Название</Input>
      </div>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default AlbumsForm;
