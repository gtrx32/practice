import { useContext } from "react";
import { z } from "zod";
import SaveButton from "../../../../../components/UI/SaveButton";
import TextArea from "../../../../../components/UI/TextArea";
import FormDataContext from "../../../../../context/FormDataContext/FormDataContext";
import FormSubmitContext from "../../../../../context/FormSubmitContext/FormSubmitContext";
import Select from "../../../../../components/UI/Select";
import Input from "../../../../../components/UI/Input";
import s from "../_shared/shared.module.scss";

export const postsSchema = z.object({
  userId: z.any().refine((value) => value !== undefined && value !== "", { message: "Это обязательное поле" }),
  title: z.string().min(1, { message: "Это обязательное поле" }),
  body: z.string().min(1, { message: "Это обязательное поле" }),
});

const PostsForm = () => {
  const { onSave } = useContext(FormSubmitContext);
  const { relatedData } = useContext(FormDataContext);

  return (
    <form className={s.form} onSubmit={onSave}>
      <div className={s.block}>
        <Select
          placeholder="Автор"
          registerName="userId"
          options={(relatedData as UserType[]).map((item) => ({ value: item.id, label: item.name }))}
        >
          Выберите автора
        </Select>
        <Input registerName="title">Заголовок</Input>
        <TextArea registerName="body">Текст поста</TextArea>
      </div>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default PostsForm;
