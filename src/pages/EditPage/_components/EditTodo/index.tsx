import { useState, useEffect, useContext } from "react";
import mainApi from "../../../../api/api";
import CheckBox from "../../../../components/UI/CheckBox";
import Select from "../../../../components/UI/Select";
import SaveButton from "../../../../components/UI/SaveButton";
import Input from "../../../../components/UI/Input";
import s from "./EditTodo.module.scss";
import { initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ValidatedInput from "../../../../components/UI/ValidatedInput";
import CorrectInputContext from "../../../../context/CorrectInputContext";
import { EditProps } from "../../types";

const EditTodo: React.FC<EditProps> = ({ id, edit }) => {
  const [todo, setTodo] = useState<TodoType | null>(null);
  const [todoResponse, setTodoResponse] = useState<TodoType>(initialValue);
  const [users, setUsers] = useState<UserType[]>([]);
  const { fieldsIsValid } = useContext(CorrectInputContext);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([edit ? mainApi.get("todos/" + id) : null, mainApi.get("users")])
      .then(([data, relatedData]) => {
        setTodo(data?.data);
        setTodoResponse(data?.data);
        setUsers(relatedData?.data);
      })
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

    const { id, ...todoWithoutId } = todoResponse;
    const method = edit ? "put" : "post";

    mainApi[method](edit ? "todos/" + id : "todos", {
      method: method.toUpperCase(),
      body: JSON.stringify(todoWithoutId),
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
        <Select
          defaultValue={todo?.userId}
          defaultLabel="Автор"
          options={users?.map((item) => ({ value: item.id, label: item.name }))}
          onChange={(value) => handleChange("userId", value)}
        >
          Выберите автора
        </Select>
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
