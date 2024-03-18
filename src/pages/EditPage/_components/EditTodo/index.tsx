import { useState, useEffect, useContext } from "react";
import mainApi from "../../../../api/api";
import CheckBox from "../../../../components/UI/CheckBox";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import Input from "../../../../components/UI/Input";
import { TodoType, UserType } from "../../types";
import s from "./EditTodo.module.scss";
import { EditTodoProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ValidatedInput from "../../../../components/UI/ValidatedInput";
import CorrectInputContext from "../../../../context/CorrectInputContext";

const EditTodo: React.FC<EditTodoProps> = ({ id, edit }) => {
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [todoResponse, setTodoResponse] = useState<TodoType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { fieldsIsValid } = useContext(CorrectInputContext);

  useEffect(() => {
    setIsLoading(true);
    edit &&
      mainApi.get("todos/" + id).then(({ data }) => {
        setTodo(data);
        setTodoResponse(data);
      });
    mainApi
      .get("users")
      .then(({ data }) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (fieldName: keyof TodoType, value: number | string | boolean) => {
    setTodoResponse((prevTodo) => ({
      ...prevTodo,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    if (!fieldsIsValid()) return;

    const method = edit ? "put" : "post";
    mainApi[method](edit ? "todos/" + id : "todos", {
      method: method.toUpperCase(),
      body: JSON.stringify(todoResponse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((json) => {
      console.log(json);
      edit ? navigate("/todos/" + id) : navigate("/todos/");
    });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <ValidatedInput pattern="id" defaultValue={todo?.id} onChange={(value) => handleChange("id", value)}>
          ID
        </ValidatedInput>
        <ComboBox
          defaultValue={todo?.userId}
          options={users?.map((item) => item.id)}
          placeholder="Автор"
          onChange={(value) => handleChange("userId", value)}
        >
          Выберите автора
        </ComboBox>
        <CheckBox defaultValue={todo?.completed} onChange={(value) => handleChange("completed", value)}>
          Выполнена
        </CheckBox>
        <Input defaultValue={todo?.title} onChange={(value) => handleChange("title", value)}>
          Текст
        </Input>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditTodo;
