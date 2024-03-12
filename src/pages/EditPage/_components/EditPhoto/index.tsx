import { ChangeEvent, useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditPhoto.module.scss";
import { AlbumType, PhotoType } from "../../types";
import mainApi from "../../../../api/api";
import { EditPhotoProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const EditPhoto: React.FC<EditPhotoProps> = ({ id, edit }) => {
  const [photo, setPhoto] = useState<PhotoType | null>(null);
  const [albums, setAlbums] = useState<AlbumType[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [photoResponse, setPhotoResponse] = useState<PhotoType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    edit &&
      mainApi.get("photos/" + id).then(({ data }) => {
        setPhoto(data);
        setPhotoResponse(data);
      });
    mainApi
      .get("albums")
      .then(({ data }) => setAlbums(data))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (fieldName: keyof PhotoType, value: number | string) => {
    setPhotoResponse((prevPhoto) => ({
      ...prevPhoto,
      [fieldName]: value,
    }));
  };

  const handleImageChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    setSelectedImage(file || null);
  };

  const onClickHandler = () => {
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
        <TextBox defaultValue={photo?.id} onChange={(value) => handleChange("id", value)}>
          ID
        </TextBox>
        <TextBox
          defaultValue={photo?.title}
          className={s.half}
          width="440px"
          onChange={(value) => handleChange("title", value)}
        >
          Название
        </TextBox>
        <ComboBox
          defaultValue={photo?.albumId}
          options={albums?.map((item) => item.id)}
          placeholder="Альбом"
          className={s.half}
          onChange={(value) => handleChange("albumId", value)}
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
          <input type="file" id="imageInput" className={s.imageUploader} onChange={handleImageChange} />
          <img
            src={selectedImage ? URL.createObjectURL(selectedImage) : photo?.thumbnailUrl}
            className={s.imagePreview}
          />
        </div>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditPhoto;
