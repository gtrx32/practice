import Select from "../../../../../components/UI/Select";
import Input from "../../../../../components/UI/Input";
import { useContext } from "react";
import { z } from "zod";
import SaveButton from "../../../../../components/UI/SaveButton";
import FormDataContext from "../../../../../context/FormDataContext/FormDataContext";
import FormSubmitContext from "../../../../../context/FormSubmitContext/FormSubmitContext";
import s from "../_shared/shared.module.scss";

export const photosSchema = z.object({
  title: z.string().min(1, { message: "Это обязательное поле" }),
  albumId: z.any().refine((value) => value !== undefined && value !== "", { message: "Это обязательное поле" }),
});

const PhotosForm = () => {
  const { onSave } = useContext(FormSubmitContext);
  const { relatedData } = useContext(FormDataContext);

  return (
    <form className={s.form} onSubmit={onSave}>
      <div className={s.block}>
        <Input registerName="title" maxWidth="440px">
          Название
        </Input>
        <Select
          placeholder="Альбом"
          registerName="albumId"
          options={(relatedData as AlbumType[]).map((item) => ({ value: item.id, label: item.title }))}
        >
          Выберите альбом
        </Select>
      </div>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default PhotosForm;
