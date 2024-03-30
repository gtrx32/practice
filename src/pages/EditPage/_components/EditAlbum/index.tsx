import { useContext, useEffect, useState } from "react";
import Select from "../../../../components/UI/Select";
import SaveButton from "../../../../components/UI/SaveButton";
import s from "./EditAlbum.module.scss";
import mainApi from "../../../../api/api";
import { initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import CorrectInputContext from "../../../../context/CorrectInputContext";
import ValidatedInput from "../../../../components/UI/ValidatedInput";
import { EditProps } from "../../types";

const EditAlbum: React.FC<EditProps> = ({ id, edit }) => {
  const [album, setAlbum] = useState<AlbumType | null>(null);
  const [albumResponse, setAlbumResponse] = useState<AlbumType>(initialValue);
  const [users, setUsers] = useState<UserType[]>([]);
  const { fieldsIsValid } = useContext(CorrectInputContext);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([edit ? mainApi.get("albums/" + id) : null, mainApi.get("users")])
      .then(([data, relatedData]) => {
        setAlbum(data?.data);
        setAlbumResponse(data?.data);
        setUsers(relatedData?.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (fieldName: keyof AlbumType, value: number | string) => {
    setAlbumResponse((prevAlbum) => ({
      ...prevAlbum,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    if (!fieldsIsValid()) return;

    const { id, ...albumWithoutId } = albumResponse;
    const method = edit ? "put" : "post";

    mainApi[method](edit ? "albums/" + id : "albums", {
      method: method.toUpperCase(),
      body: JSON.stringify(albumWithoutId),
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
        <Select
          defaultValue={album?.userId}
          defaultLabel="Владелец"
          options={users?.map((item) => ({ value: item.id, label: item.name }))}
          onChange={(value) => handleChange("userId", value)}
        >
          Выберите владельца
        </Select>
        <ValidatedInput
          pattern="default"
          defaultValue={album?.title}
          onChange={(value) => handleChange("title", value)}
        >
          Название
        </ValidatedInput>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditAlbum;
