import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import s from "./EditUser.module.scss";

interface EditUserProps {}

const EditUser: React.FC<EditUserProps> = () => {
  return (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox className={s.half} width="440px">
          ФИО
        </TextBox>
        <TextBox className={s.half} width="440px">
          Никнейм
        </TextBox>
        <TextBox className={s.half} width="440px">
          Email
        </TextBox>
        <TextBox className={s.half} width="440px">
          Вебсайт
        </TextBox>
        <TextBox className={s.half} width="440px">
          Телефон
        </TextBox>
      </div>
      <div className={s.block}>
        <h2>Адрес</h2>
        <TextBox width="440px">Индекс</TextBox>
        <TextBox width="440px">Город</TextBox>
        <TextBox>Улица</TextBox>
      </div>
      <div className={s.block}>
        <h2>Компания</h2>
        <TextBox>Название</TextBox>
        <TextBox textarea={true}>Описание</TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditUser;
