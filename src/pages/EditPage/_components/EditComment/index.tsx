import { useState, useEffect, useContext } from "react";
import mainApi from "../../../../api/api";
import Select from "../../../../components/UI/Select";
import SaveButton from "../../../../components/UI/SaveButton";
import Input from "../../../../components/UI/Input";
import s from "./EditComment.module.scss";
import { initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import TextArea from "../../../../components/UI/TextArea";
import CorrectInputContext from "../../../../context/CorrectInputContext";
import ValidatedInput from "../../../../components/UI/ValidatedInput";
import { EditProps } from "../../types";

const EditComment: React.FC<EditProps> = ({ id, edit }) => {
  const [comment, setComment] = useState<CommentType | null>(null);
  const [commentResponse, setCommentResponse] = useState<CommentType>(initialValue);
  const [posts, setPosts] = useState<PostType[]>([]);
  const { fieldsIsValid } = useContext(CorrectInputContext);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([edit ? mainApi.get("comments/" + id) : null, mainApi.get("posts")])
      .then(([data, relatedData]) => {
        setComment(data?.data);
        setCommentResponse(data?.data);
        setPosts(relatedData?.data);
      })
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

    const { id, ...commentWithoutId } = commentResponse;
    const method = edit ? "put" : "post";

    mainApi[method](edit ? "comments/" + id : "comments", {
      method: method.toUpperCase(),
      body: JSON.stringify(commentWithoutId),
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
        <Select
          defaultValue={comment?.postId}
          defaultLabel="Пост"
          options={posts?.map((item) => ({ value: item.id, label: item.title }))}
          onChange={(value) => handleChange("postId", value)}
          className={s.half}
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
