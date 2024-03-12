import { useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { PostType, UserType } from "../../types";
import s from "./EditPost.module.scss";
import mainApi from "../../../../api/api";
import { EditPostProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const EditPost: React.FC<EditPostProps> = ({ id }) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [postResponse, setPostResponse] = useState<PostType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    mainApi.get("posts/" + id).then(({ data }) => {
      setPost(data);
      setPostResponse(data);
    });
    mainApi
      .get("users")
      .then(({ data }) => setUsers(data))
      .finally(() => setIsLoading(false));
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
      .put("posts/" + id, {
        method: "PUT",
        body: JSON.stringify(postResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/posts/" + id);
      });
  };

  return !isLoading ? (
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
  ) : (
    <LoadingSpinner />
  );
};

export default EditPost;
