import { ImagePlaceholder } from "../../../assets/images/icons";
import s from "./ImageUploader.module.scss";
import { useFormContext, useController, Controller } from "react-hook-form";
import { ImageUploaderProps, checkImage } from "./types";
import DragAndDropInput from "./DragAndDropInput";
import { useId } from "react";

const ImageUploader: React.FC<ImageUploaderProps> = ({ registerName }) => {
  const id = useId();

  const { control, clearErrors } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({ name: registerName, control, defaultValue: "" });

  const handleImageChange = (file: File | null) => {
    if (file) {
      const inputError = checkImage(file);

      if (inputError === "") {
        clearErrors(registerName);
      } else {
        control.setError(registerName, { type: "custom", message: inputError });
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        field.onChange(base64String);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Изображение</h2>
      <div className={s.uploader}>
        <DragAndDropInput id={id} handleFileChange={handleImageChange} />
        <Controller
          name={registerName}
          control={control}
          render={() => (
            <input
              {...field}
              type="file"
              id={id}
              className={s.input}
              onChange={(e) => handleImageChange(e.target.files && e.target.files[0])}
              value={""}
            />
          )}
        />
        <div className={s.image}>
          {field.value ? <img src={field.value} className={s.imagePreview} /> : <ImagePlaceholder />}
          {field.value && (
            <button
              onClick={() => {
                field.onChange("");
              }}
              className={s.deleteButton}
            >
              Удалить
            </button>
          )}
        </div>
      </div>
      {error?.message && <p className={s.error}>{error.message}</p>}
    </div>
  );
};

export default ImageUploader;
