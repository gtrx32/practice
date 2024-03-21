import { useContext, useEffect, useState } from "react";
import Select from "../../../../components/UI/Select";
import SaveButton from "../../../../components/UI/SaveButton";
import { EditProps, PostType, UserType } from "../../types";
import s from "./EditPost.module.scss";
import mainApi from "../../../../api/api";
import { initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import TextArea from "../../../../components/UI/TextArea";
import ValidatedInput from "../../../../components/UI/ValidatedInput";
import CorrectInputContext from "../../../../context/CorrectInputContext";

const EditPost: React.FC<EditProps> = ({ id, edit }) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [postResponse, setPostResponse] = useState<PostType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { fieldsIsValid } = useContext(CorrectInputContext);

  useEffect(() => {
    setIsLoading(true);
    edit &&
      mainApi.get("posts/" + id).then(({ data }) => {
        setPost(data);
        setPostResponse(data);
      });
    mainApi
      .get("users")
      .then(({ data }) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (fieldName: keyof PostType, value: number | string) => {
    setPostResponse((prevPost) => ({
      ...prevPost,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    if (!fieldsIsValid()) return;

    const method = edit ? "put" : "post";
    mainApi[method](edit ? "posts/" + id : "posts", {
      method: method.toUpperCase(),
      body: JSON.stringify(postResponse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((json) => {
      console.log(json);
      edit ? navigate("/posts/" + id) : navigate("/posts/");
    });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <ValidatedInput pattern="id" defaultValue={post?.id} onChange={(value) => handleChange("id", value)}>
          ID
        </ValidatedInput>
        <Select
          defaultValue={post?.userId}
          options={users?.map((item) => item.id)}
          placeholder="Автор"
          onChange={(value) => handleChange("userId", value)}
        >
          Выберите автора
        </Select>
        <ValidatedInput pattern="default" defaultValue={post?.title} onChange={(value) => handleChange("title", value)}>
          Заголовок
        </ValidatedInput>
        <TextArea defaultValue={post?.body} onChange={(value) => handleChange("body", value)}>
          Текст поста
        </TextArea>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditPost;
