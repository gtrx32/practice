import { useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditAlbum.module.scss";
import mainApi from "../../../../api/api";
import { AlbumType, UserType } from "../../types";
import { EditAlbumProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";

const EditAlbum: React.FC<EditAlbumProps> = ({ id }) => {
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);
  const [albumResponse, setAlbumResponse] = useState<AlbumType>(initialValue);
  const navigate = useNavigate();

  useEffect(() => {
    mainApi.get("albums/" + id).then(({ data }) => {
      setAlbum(data);
      setAlbumResponse(data);
    });
    mainApi.get("users").then(({ data }) => setUsers(data));
  }, []);

  const handleComboBoxChange = (fieldName: string, value: number) => {
    setAlbumResponse((prevAlbum) => ({
      ...prevAlbum,
      [fieldName]: value,
    }));
  };

  const handleTextBoxChange = (fieldName: string, value: string) => {
    setAlbumResponse((prevAlbum) => ({
      ...prevAlbum,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    mainApi
      .put("albums/" + id, {
        method: "PUT",
        body: JSON.stringify(albumResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/albums/" + id);
      });
  };

  return (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={album?.id} onChange={(value) => handleTextBoxChange("id", value)}>
          ID
        </TextBox>
        <ComboBox
          defaultValue={album?.userId}
          options={users?.map((item) => item.id)}
          placeholder="Владелец"
          onChange={(value) => handleComboBoxChange("userId", value)}
        >
          Выберите владельца
        </ComboBox>
        <TextBox defaultValue={album?.title} onChange={(value) => handleTextBoxChange("title", value)}>
          Название
        </TextBox>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditAlbum;
