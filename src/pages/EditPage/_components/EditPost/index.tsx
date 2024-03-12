import { useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { PostType, UserType } from "../../types";
import s from "./EditPost.module.scss";
import mainApi from "../../../../api/api";

interface EditPostProps {
  id: number;
}

const EditPost: React.FC<EditPostProps> = ({ id }) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);

  useEffect(() => {
    mainApi.get("posts/" + id).then(({ data }) => setPost(data));
    mainApi.get("users").then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox defaultValue={post?.userId} options={users?.map((item) => item.id)} placeholder="Автор">
          Выберите автора
        </ComboBox>
        <TextBox defaultValue={post?.title}>Заголовок</TextBox>
        <TextBox defaultValue={post?.body} textarea={true}>
          Текст поста
        </TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditPost;
