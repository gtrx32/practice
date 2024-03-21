import { useState, useEffect, useContext } from "react";
import mainApi from "../../../../api/api";
import Select from "../../../../components/UI/Select";
import SaveButton from "../../../../components/UI/SaveButton";
import Input from "../../../../components/UI/Input";
import { CommentType, EditProps, PostType } from "../../types";
import s from "./EditComment.module.scss";
import { initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import TextArea from "../../../../components/UI/TextArea";
import CorrectInputContext from "../../../../context/CorrectInputContext";
import ValidatedInput from "../../../../components/UI/ValidatedInput";

const EditComment: React.FC<EditProps> = ({ id, edit }) => {
  const [comment, setComment] = useState<CommentType | null>(null);
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [commentResponse, setCommentResponse] = useState<CommentType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { fieldsIsValid } = useContext(CorrectInputContext);

  useEffect(() => {
    setIsLoading(true);
    edit &&
      mainApi.get("comments/" + id).then(({ data }) => {
        setComment(data);
        setCommentResponse(data);
      });
    mainApi
      .get("posts")
      .then(({ data }) => setPosts(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (fieldName: keyof CommentType, value: number | string) => {
    setCommentResponse((prevComment) => ({
      ...prevComment,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    if (!fieldsIsValid()) return;

    const method = edit ? "put" : "post";
    mainApi[method](edit ? "comments/" + id : "comments", {
      method: method.toUpperCase(),
      body: JSON.stringify(commentResponse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((json) => {
      console.log(json);
      edit ? navigate("/comments/" + id) : navigate("/comments/");
    });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <ValidatedInput pattern="id" defaultValue={comment?.id} onChange={(value) => handleChange("id", value)}>
          ID
        </ValidatedInput>
        <Select
          defaultValue={comment?.postId}
          options={posts?.map((item) => item.id)}
          placeholder="Пост"
          className={s.half}
          onChange={(value) => handleChange("postId", value)}
        >
          Выберите пост
        </Select>
        <Input
          onChange={(value) => handleChange("email", value)}
          defaultValue={comment?.email}
          className={s.half}
          width="440px"
        >
          Email автора
        </Input>
        <TextArea onChange={(value) => handleChange("body", value)} defaultValue={comment?.body}>
          Текст комментария
        </TextArea>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditComment;
