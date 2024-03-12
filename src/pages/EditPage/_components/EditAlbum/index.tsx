import { useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditAlbum.module.scss";
import mainApi from "../../../../api/api";
import { AlbumType, UserType } from "../../types";

interface EditAlbumProps {
  id: number;
}

type FormData = {
  owner: string;
  name: string;
};

const EditAlbum: React.FC<EditAlbumProps> = ({ id }) => {
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [users, setUsers] = useState<UserType[] | null>(null);

  const [formData, setFormData] = useState<FormData>({
    owner: "",
    name: "",
  });
  const onHandleChange = (value: string, key: keyof FormData) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    mainApi.get("albums/" + id).then(({ data }) => setAlbum(data));
    mainApi.get("users").then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox defaultValue={album?.userId} options={users?.map((item) => item.id)} placeholder="Владелец">
          Выберите владельца
        </ComboBox>
        <TextBox defaultValue={album?.title}>Название</TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditAlbum;
