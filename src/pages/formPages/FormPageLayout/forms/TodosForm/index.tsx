import Select from "../../../../../components/UI/Select";
import Input from "../../../../../components/UI/Input";
import { useContext } from "react";
import SaveButton from "../../../../../components/UI/SaveButton";
import FormDataContext from "../../../../../context/FormDataContext/FormDataContext";
import FormSubmitContext from "../../../../../context/FormSubmitContext/FormSubmitContext";
import CheckBox from "../../../../../components/UI/CheckBox";
import { z } from "zod";

export const todosSchema = z.object({
  userId: z.number().min(1, { message: "Это обязательное поле" }),
  title: z.string().min(1, { message: "Это обязательное поле" }),
});

const TodosForm = () => {
  const { onSave } = useContext(FormSubmitContext);
  const { relatedData } = useContext(FormDataContext);

  return (
    <form onSubmit={onSave}>
      <Select
        placeholder="Автор"
        registerName="userId"
        options={(relatedData as UserType[]).map((item) => ({ value: item.id, label: item.name }))}
      >
        Выберите автора
      </Select>
      <CheckBox registerName="completed">Выполнена</CheckBox>
      <Input registerName="title">Текст</Input>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default TodosForm;
