import CheckBox from "../../../../components/UI/CheckBox";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditTodo.module.scss";

interface EditTodoProps {}

const EditTodo: React.FC<EditTodoProps> = () => {
  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox options={["1"]} placeholder="Автор">
          Выберите автора
        </ComboBox>
        <CheckBox>Выполнена</CheckBox>
        <TextBox>Текст</TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditTodo;
