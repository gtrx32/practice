import { ChangeEvent, useEffect, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditPhoto.module.scss";
import { AlbumType, PhotoType } from "../../types";
import mainApi from "../../../../api/api";

interface EditPhotoProps {
  id: number;
}

const EditPhoto: React.FC<EditPhotoProps> = ({ id }) => {
  const [photo, setPhoto] = useState<PhotoType | null>(null);
  const [albums, setAlbums] = useState<AlbumType[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    mainApi.get("photos/" + id).then(({ data }) => setPhoto(data));
    mainApi.get("albums").then(({ data }) => setAlbums(data));
  }, []);

  const handleImageChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    setSelectedImage(file || null);
  };

  return (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={photo?.title} className={s.half} width="440px">
          Название
        </TextBox>
        <ComboBox
          defaultValue={photo?.albumId}
          options={albums?.map((item) => item.id)}
          placeholder="Альбом"
          className={s.half}
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
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditPhoto;
