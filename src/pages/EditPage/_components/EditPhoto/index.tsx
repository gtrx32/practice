import { useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditPhoto.module.scss";
import { AlbumType, PhotoType } from "../../types";
import mainApi from "../../../../api/api";
import { EditPhotoProps, initialValue } from "./types";

const EditPhoto: React.FC<EditPhotoProps> = ({ id }) => {
  const [photo, setPhoto] = useState<PhotoType | null>(null);
  const [albums, setAlbums] = useState<AlbumType[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [photoResponse, setPhotoResponse] = useState<PhotoType>(initialValue);

  useEffect(() => {
    mainApi.get("photos/" + id).then(({ data }) => {
      setPhoto(data);
      setPhotoResponse(data);
    });
    mainApi.get("albums").then(({ data }) => setAlbums(data));
  }, []);

  const handleComboBoxChange = (fieldName: string, value: number) => {
    setPhotoResponse((prevPhoto) => ({
      ...prevPhoto,
      [fieldName]: value,
    }));
  };

  const handleTextBoxChange = (fieldName: string, value: string) => {
    setPhotoResponse((prevPhoto) => ({
      ...prevPhoto,
      [fieldName]: value,
    }));
  };

  const onClickHandler = () => {
    mainApi
      .put("photos/" + id, {
        method: "PUT",
        body: JSON.stringify(photoResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => console.log(json));
  };

  return (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={photo?.id} onChange={(value) => handleTextBoxChange("id", value)}>
          ID
        </TextBox>
        <TextBox
          defaultValue={photo?.title}
          className={s.half}
          width="440px"
          onChange={(value) => handleTextBoxChange("title", value)}
        >
          Название
        </TextBox>
        <ComboBox
          defaultValue={photo?.albumId}
          options={albums?.map((item) => item.id)}
          placeholder="Альбом"
          className={s.half}
          onChange={(value) => handleComboBoxChange("albumId", value)}
        >
          Выберите альбом
        </ComboBox>
      </div>
      <div className={s.formImage}>
        <h2 className={s.imageTitle}>Изображение</h2>
        <div className={s.image}>
          <label className={s.imageLabel} htmlFor="imageInput">
            Перетащите сюда или нажмите для выбора
          </label>
          <input type="file" id="imageInput" className={s.imageUploader} />
          <img
            src={selectedImage ? URL.createObjectURL(selectedImage) : photo?.thumbnailUrl}
            className={s.imagePreview}
          />
        </div>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  );
};

export default EditPhoto;
