import { useState, useEffect } from "react";
import mainApi from "../../../../api/api";
import CheckBox from "../../../../components/UI/CheckBox";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { TodoType, UserType } from "../../types";
import s from "./EditTodo.module.scss";
import { EditTodoProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const EditTodo: React.FC<EditTodoProps> = ({ id }) => {
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [todoResponse, setTodoResponse] = useState<TodoType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    mainApi.get("todos/" + id).then(({ data }) => {
      setTodo(data);
      setTodoResponse(data);
    });
    mainApi
      .get("users")
      .then(({ data }) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleComboBoxChange = (fieldName: string, value: number) => {
    setTodoResponse((prevTodo) => ({
      ...prevTodo,
      [fieldName]: value,
    }));
  };

  const handleCheckBoxChange = (fieldName: string, value: boolean) => {
    setTodoResponse((prevTodo) => ({
      ...prevTodo,
      [fieldName]: value,
    }));
  };

  const handleTextBoxChange = (fieldName: string, value: string) => {
    setTodoResponse((prevTodo) => ({
      ...prevTodo,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    mainApi
      .put("todos/" + id, {
        method: "PUT",
        body: JSON.stringify(todoResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/todos/" + id);
      });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={todo?.id} onChange={(value) => handleTextBoxChange("id", value)}>
          ID
        </TextBox>
        <ComboBox
          defaultValue={todo?.userId}
          options={users?.map((item) => item.id)}
          placeholder="Автор"
          onChange={(value) => handleComboBoxChange("userId", value)}
        >
          Выберите автора
        </ComboBox>
        <CheckBox defaultValue={todo?.completed} onChange={(value) => handleCheckBoxChange("completed", value)}>
          Выполнена
        </CheckBox>
        <TextBox defaultValue={todo?.title} onChange={(value) => handleTextBoxChange("title", value)}>
          Текст
        </TextBox>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditTodo;
