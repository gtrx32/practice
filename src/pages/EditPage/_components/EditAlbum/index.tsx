import ComboBox from "../../../../components/UI/ComboBox";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditAlbum.module.scss";

interface EditAlbumProps {}

const EditAlbum: React.FC<EditAlbumProps> = () => {
  return (
    <div className={s.form}>
      <div className={s.block}>
        <ComboBox options={["1"]} placeholder="Владелец">
          Выберите владельца
        </ComboBox>
        <TextBox>Название</TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditAlbum;
