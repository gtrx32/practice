import { useContext } from "react";
import { z } from "zod";
import SaveButton from "../../../../components/UI/SaveButton";
import FormDataContext from "../../../../context/FormDataContext";
import SaveFormContext from "../../../../context/SaveFormContext";
import Input from "../../../../components/UI/Input";
import Select from "../../../../components/UI/Select";
import TextArea from "../../../../components/UI/TextArea";
import s from "../_shared/shared.module.scss";

export const commentsSchema = z.object({
  postId: z.any().refine((value) => value !== undefined && value !== "", { message: "Это обязательное поле" }),
  email: z.string().min(1, { message: "Это обязательное поле" }).email("Некорректный адрес электронной почты"),
  body: z.string().min(1, { message: "Это обязательное поле" }),
});

const CommentsForm = () => {
  const { onSave } = useContext(SaveFormContext);
  const { relatedData } = useContext(FormDataContext);

  return (
    <form className={s.form} onSubmit={onSave}>
      <div className={s.block}>
        <Select
          placeholder="Пост"
          registerName="postId"
          options={(relatedData as PostType[]).map((item) => ({ value: item.id, label: item.title }))}
        >
          Выберите пост
        </Select>
        <Input registerName="email" maxWidth="440px">
          Email автора
        </Input>
        <TextArea registerName="body">Текст комментария</TextArea>
      </div>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default CommentsForm;
