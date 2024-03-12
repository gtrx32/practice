import { useState, useEffect } from "react";
import mainApi from "../../../../api/api";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { CommentType, PostType } from "../../types";
import s from "./EditComment.module.scss";

interface EditCommentProps {
  id: number;
}

const EditComment: React.FC<EditCommentProps> = ({ id }) => {
  const [comment, setComment] = useState<CommentType | null>(null);
  const [posts, setPosts] = useState<PostType[] | null>(null);

  useEffect(() => {
    mainApi.get("comments/" + id).then(({ data }) => setComment(data));
    mainApi.get("posts").then(({ data }) => setPosts(data));
  }, []);

  const handleTextBoxChange = (value: string) => {
    console.log("Текст из TextBox:", value);
  };

  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox
          defaultValue={comment?.postId}
          options={posts?.map((item) => item.id)}
          placeholder="Пост"
          className={s.half}
        >
          Выберите пост
        </ComboBox>
        <TextBox onChange={handleTextBoxChange} defaultValue={comment?.email} className={s.half} width="440px">
          Email автора
        </TextBox>
        <TextBox defaultValue={comment?.body} textarea={true}>
          Текст комментария
        </TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditComment;
