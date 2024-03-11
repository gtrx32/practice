import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditPhoto.module.scss";

interface EditPhotoProps {}

const EditPhoto: React.FC<EditPhotoProps> = () => {
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
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
      {/*блок для загрузки картинки*/}
    </div>
  );
};

export default EditPhoto;
