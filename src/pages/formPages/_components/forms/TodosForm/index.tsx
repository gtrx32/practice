import Select from "../../../../../components/UI/Select";
import Input from "../../../../../components/UI/Input";
import { useContext } from "react";
import SaveButton from "../../../../../components/UI/SaveButton";
import FormDataContext from "../../../../../context/FormDataContext";
import SaveFormContext from "../../../../../context/SaveFormContext";
import CheckBox from "../../../../../components/UI/CheckBox";
import { z } from "zod";
import s from "../_shared/shared.module.scss";

export const todosSchema = z.object({
  userId: z.any().refine((value) => value !== undefined && value !== "", { message: "Это обязательное поле" }),
  completed: z.any(),
  title: z.string().min(1, { message: "Это обязательное поле" }),
});

const TodosForm = () => {
  const { onSave } = useContext(SaveFormContext);
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
        <CheckBox registerName="completed">Выполнена</CheckBox>
        <Input registerName="title">Текст</Input>
      </div>
      <SaveButton type="submit">Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </form>
  );
};

export default TodosForm;
