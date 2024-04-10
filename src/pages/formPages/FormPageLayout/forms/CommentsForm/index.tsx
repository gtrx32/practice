import { useContext } from "react";
import { z } from "zod";
import SaveButton from "../../../../../components/UI/SaveButton";
import FormDataContext from "../../../../../context/FormDataContext/FormDataContext";
import FormSubmitContext from "../../../../../context/FormSubmitContext/FormSubmitContext";
import Input from "../../../../../components/UI/Input";
import Select from "../../../../../components/UI/Select";
import TextArea from "../../../../../components/UI/TextArea";

export const commentsSchema = z.object({
  postId: z.number().min(1, { message: "Это обязательное поле" }),
  email: z.string().min(1, { message: "Это обязательное поле" }).email("Некорректный адрес электронной почты"),
  body: z.string().min(1, { message: "Это обязательное поле" }),
});

const CommentsForm = () => {
  const { onSave } = useContext(FormSubmitContext);
  const { relatedData } = useContext(FormDataContext);

  return (
    <form onSubmit={onSave}>
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
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default CommentsForm;
