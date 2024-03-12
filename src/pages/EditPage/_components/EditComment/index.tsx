import { useState, useEffect } from "react";
import mainApi from "../../../../api/api";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { CommentType, PostType } from "../../types";
import s from "./EditComment.module.scss";
import { EditCommentProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const EditComment: React.FC<EditCommentProps> = ({ id }) => {
  const [comment, setComment] = useState<CommentType | null>(null);
  const [posts, setPosts] = useState<PostType[] | null>(null);
  const [commentResponse, setCommentResponse] = useState<CommentType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    mainApi.get("comments/" + id).then(({ data }) => {
      setComment(data);
      setCommentResponse(data);
    });
    mainApi
      .get("posts")
      .then(({ data }) => setPosts(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleComboBoxChange = (fieldName: string, value: number) => {
    setCommentResponse((prevComment) => ({
      ...prevComment,
      [fieldName]: value,
    }));
  };

  const handleTextBoxChange = (fieldName: string, value: string) => {
    setCommentResponse((prevComment) => ({
      ...prevComment,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    mainApi
      .put("comments/" + id, {
        method: "PUT",
        body: JSON.stringify(commentResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/comments/" + id);
      });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={comment?.id} onChange={(value) => handleTextBoxChange("id", value)}>
          ID
        </TextBox>
        <ComboBox
          defaultValue={comment?.postId}
          options={posts?.map((item) => item.id)}
          placeholder="Пост"
          className={s.half}
          onChange={(value) => handleComboBoxChange("postId", value)}
        >
          Выберите пост
        </ComboBox>
        <TextBox
          onChange={(value) => handleTextBoxChange("email", value)}
          defaultValue={comment?.email}
          className={s.half}
          width="440px"
        >
          Email автора
        </TextBox>
        <TextBox onChange={(value) => handleTextBoxChange("body", value)} defaultValue={comment?.body} textarea={true}>
          Текст комментария
        </TextBox>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditComment;
