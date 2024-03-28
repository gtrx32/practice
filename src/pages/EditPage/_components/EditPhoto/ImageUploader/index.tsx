import { ImagePlaceholder } from "../../../../../assets/images/icons";
import s from "./ImageUploader.module.scss";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { checkImage } from "./types";
import clsx from "clsx";

interface ImageUploaderProps {
  setPhotoResponse: Dispatch<SetStateAction<PhotoType>>;
  defaultImageUrl: string | undefined;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ setPhotoResponse, defaultImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(defaultImageUrl);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) handleImageChange(file);
  };

  const handleImageChange = (file: File) => {
    if (!checkImage(file)) return;

    setImageUrl(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      setPhotoResponse((prevPhoto) => ({ ...prevPhoto, url: base64String }));
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => setImageUrl("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    handleImageChange(e.dataTransfer.files[0]);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Изображение</h2>
      <div className={s.form}>
        <div
          className={clsx(s.uploader, isDragOver && s.dragOverUploader)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label className={s.label} htmlFor="input">
            Перетащите сюда или нажмите для выбора
          </label>
        </div>
        <input type="file" id="input" className={s.input} onChange={handleFileInputChange} />
        <div className={s.image}>
          {imageUrl ? <img src={imageUrl} className={s.preview} /> : <ImagePlaceholder />}
          {imageUrl && (
            <button onClick={handleDeleteImage} className={s.deleteButton}>
              Удалить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
