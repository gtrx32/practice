import { ChangeEvent, useState } from "react";
import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditPhoto.module.scss";

interface EditPhotoProps {}

const EditPhoto: React.FC<EditPhotoProps> = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    setSelectedImage(file || null);
  };

  return (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox className={s.half} width="440px">
          Название
        </TextBox>
        <ComboBox options={["1"]} placeholder="Альбом" className={s.half}>
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
          {selectedImage && <img src={URL.createObjectURL(selectedImage)} className={s.imagePreview} />}
        </div>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditPhoto;
