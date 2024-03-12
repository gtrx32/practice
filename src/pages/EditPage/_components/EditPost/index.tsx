import { useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { PostType, UserType } from "../../types";
import s from "./EditPost.module.scss";
import mainApi from "../../../../api/api";
import { EditPostProps, initialValue } from "./types";

const EditPost: React.FC<EditPostProps> = ({ id }) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [postResponse, setPostResponse] = useState<PostType>(initialValue);

  useEffect(() => {
    mainApi.get("posts/" + id).then(({ data }) => {
      setPost(data);
      setPostResponse(data);
    });
    mainApi.get("users").then(({ data }) => setUsers(data));
  }, []);

  const handleComboBoxChange = (fieldName: string, value: number) => {
    setPostResponse((prevPost) => ({
      ...prevPost,
      [fieldName]: value,
    }));
  };

  const handleTextBoxChange = (fieldName: string, value: string) => {
    setPostResponse((prevPost) => ({
      ...prevPost,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    mainApi
      .put("postt/" + id, {
        method: "PUT",
        body: JSON.stringify(postResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => console.log(json));
  };

  return (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={post?.id} onChange={(value) => handleTextBoxChange("id", value)}>
          ID
        </TextBox>
        <ComboBox
          defaultValue={post?.userId}
          options={users?.map((item) => item.id)}
          placeholder="Автор"
          onChange={(value) => handleComboBoxChange("userId", value)}
        >
          Выберите автора
        </ComboBox>
        <TextBox defaultValue={post?.title} onChange={(value) => handleTextBoxChange("title", value)}>
          Заголовок
        </TextBox>
        <TextBox defaultValue={post?.body} textarea={true} onChange={(value) => handleTextBoxChange("body", value)}>
          Текст поста
        </TextBox>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  );
};

export default EditPost;
