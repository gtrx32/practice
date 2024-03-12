import { useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditAlbum.module.scss";
import mainApi from "../../../../api/api";
import { AlbumType, UserType } from "../../types";
import { EditAlbumProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const EditAlbum: React.FC<EditAlbumProps> = ({ id, edit }) => {
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [albumResponse, setAlbumResponse] = useState<AlbumType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    edit &&
      mainApi.get("albums/" + id).then(({ data }) => {
        setAlbum(data);
        setAlbumResponse(data);
      });
    mainApi
      .get("users")
      .then(({ data }) => setUsers(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (fieldName: keyof AlbumType, value: number | string) => {
    setAlbumResponse((prevAlbum) => ({
      ...prevAlbum,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    const method = edit ? "put" : "post";
    mainApi[method](edit ? "albums/" + id : "albums", {
      method: method.toUpperCase(),
      body: JSON.stringify(albumResponse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((json) => {
      console.log(json);
      edit ? navigate("/albums/" + id) : navigate("/albums/");
    });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={album?.id} onChange={(value) => handleChange("id", value)}>
          ID
        </TextBox>
        <ComboBox
          defaultValue={album?.userId}
          options={users?.map((item) => item.id)}
          placeholder="Владелец"
          onChange={(value) => handleChange("userId", value)}
        >
          Выберите владельца
        </ComboBox>
        <TextBox defaultValue={album?.title} onChange={(value) => handleChange("title", value)}>
          Название
        </TextBox>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditAlbum;
