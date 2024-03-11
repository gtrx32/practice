import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditPost.module.scss";

interface EditPostProps {}

const EditPost: React.FC<EditPostProps> = () => {
  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox options={["1"]} placeholder="Автор">
          Выберите автора
        </ComboBox>
        <TextBox>Заголовок</TextBox>
        <TextBox textarea={true}>Текст поста</TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditPost;
