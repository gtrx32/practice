import { ChangeEvent, useContext, useEffect, useState } from "react";
import Select from "../../../../components/UI/Select";
import SaveButton from "../../../../components/UI/SaveButton";
import s from "./EditPhoto.module.scss";
import { AlbumType, EditProps, PhotoType } from "../../types";
import mainApi from "../../../../api/api";
import { initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import clsx from "clsx";
import CorrectInputContext from "../../../../context/CorrectInputContext";
import ValidatedInput from "../../../../components/UI/ValidatedInput";

const EditPhoto: React.FC<EditProps> = ({ id, edit }) => {
  const [photo, setPhoto] = useState<PhotoType | null>(null);
  const [albums, setAlbums] = useState<AlbumType[] | null>(null);
  const [photoResponse, setPhotoResponse] = useState<PhotoType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const { fieldsIsValid } = useContext(CorrectInputContext);

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

  edit == true &&
    useEffect(() => {
      setImageUrl(photo?.thumbnailUrl);
    }, [photo]);

  const handleChange = (fieldName: keyof PhotoType, value: number | string) => {
    setPhotoResponse((prevPhoto) => ({
      ...prevPhoto,
      [fieldName]: value,
    }));
  };

  const handleImageChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
      if (!allowedTypes.includes(file.type)) {
        alert("Пожалуйста, загрузите изображение в формате PNG, JPEG или WEBP.");
        return;
      }
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("Максимальный размер файла - 5 МБ.");
        return;
      }
      setImageUrl(URL.createObjectURL(file));

      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        setPhotoResponse((prevPhoto) => ({
          ...prevPhoto,
          url: base64String,
        }));
      };
      reader.readAsDataURL(file);
    }
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

  const imageButtonHandler = () => {
    setImageUrl("");
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
          options={albums?.map((item) => item.id)}
          placeholder="Альбом"
          className={s.half}
          onChange={(value) => handleChange("albumId", value)}
        >
          Выберите альбом
        </Select>
      </div>
      <div className={s.formImage}>
        <h2 className={s.imageTitle}>Изображение</h2>
        <div className={s.image}>
          <label className={s.imageLabel} htmlFor="imageInput">
            Перетащите сюда или нажмите для выбора
          </label>
          <input type="file" id="imageInput" className={s.imageUploader} onChange={handleImageChange} />
          <div className={clsx(s.imageContainer, imageUrl !== "" ? s.imageHover : "")}>
            {imageUrl !== "" ? <img src={imageUrl} className={s.imagePreview} /> : null}
            <button onClick={imageButtonHandler} className={s.imageButton}>
              Удалить
            </button>
          </div>
        </div>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditPhoto;
