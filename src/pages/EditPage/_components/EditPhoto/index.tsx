import React, { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import SaveButton from "../../../../components/UI/SaveButton";
import Select from "../../../../components/UI/Select";
import ValidatedInput from "../../../../components/UI/ValidatedInput";
import mainApi from "../../../../api/api";
import s from "./EditPhoto.module.scss";
import { useNavigate } from "react-router";
import CorrectInputContext from "../../../../context/CorrectInputContext";
import { initialValue } from "./types";
import ImageUploader from "./ImageUploader";
import { EditProps } from "../../types";

const EditPhoto: React.FC<EditProps> = ({ id, edit }) => {
  const [photo, setPhoto] = useState<PhotoType | null>(null);
  const [photoResponse, setPhotoResponse] = useState<PhotoType>(initialValue);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const { fieldsIsValid } = useContext(CorrectInputContext);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([edit ? mainApi.get("photos/" + id) : null, mainApi.get("albums")])
      .then(([data, relatedData]) => {
        setPhoto(data?.data);
        setPhotoResponse(data?.data);
        setAlbums(relatedData?.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (fieldName: keyof PhotoType, value: number | string) => {
    setPhotoResponse((prevPhoto) => ({
      ...prevPhoto,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    if (!fieldsIsValid()) return;

    const method = edit ? "put" : "post";
    mainApi[method](edit ? "photos/" + id : "photos", {
      method: method.toUpperCase(),
      body: JSON.stringify(photoResponse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((json) => {
      console.log(json);
      edit ? navigate("/photos/" + id) : navigate("/photos/");
    });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <ValidatedInput pattern="id" defaultValue={photo?.id} onChange={(value) => handleChange("id", value)}>
          ID
        </ValidatedInput>
        <ValidatedInput
          pattern="default"
          defaultValue={photo?.title}
          className={s.half}
          width="440px"
          onChange={(value) => handleChange("title", value)}
        >
          Название
        </ValidatedInput>
        <Select
          defaultValue={photo?.albumId}
          defaultLabel="Альбом"
          options={albums?.map((item) => ({ value: item.id, label: item.title }))}
          onChange={(value) => handleChange("albumId", value)}
          className={s.half}
        >
          Выберите альбом
        </Select>
      </div>
      <ImageUploader setPhotoResponse={setPhotoResponse} defaultImageUrl={photo?.thumbnailUrl} />
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditPhoto;
