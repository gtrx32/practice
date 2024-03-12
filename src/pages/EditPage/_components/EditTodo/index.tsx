import { useState, useEffect } from "react";
import mainApi from "../../../../api/api";
import CheckBox from "../../../../components/UI/CheckBox";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { TodoType, UserType } from "../../types";
import s from "./EditTodo.module.scss";

interface EditTodoProps {
  id: number;
}

const EditTodo: React.FC<EditTodoProps> = ({ id }) => {
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);

  useEffect(() => {
    mainApi.get("todos/" + id).then(({ data }) => setTodo(data));
    mainApi.get("users").then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox defaultValue={todo?.userId} options={users?.map((item) => item.id)} placeholder="Автор">
          Выберите автора
        </ComboBox>
        <CheckBox defaultValue={todo?.completed}>Выполнена</CheckBox>
        <TextBox defaultValue={todo?.title}>Текст</TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditTodo;
