import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditComment.module.scss";

interface EditCommentProps {}

const EditComment: React.FC<EditCommentProps> = () => {
  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox options={["1"]} placeholder="Пост" className={s.half}>
          Выберите пост
        </ComboBox>
        <TextBox className={s.half} width="440px">
          Email автора
        </TextBox>
        <TextBox textarea={true}>Текст комментария</TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditComment;
