import { useEffect, useState } from "react";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { UserType } from "../../types";
import s from "./EditUser.module.scss";
import mainApi from "../../../../api/api";

interface EditUserProps {
  id: number;
}

const EditUser: React.FC<EditUserProps> = ({ id }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    mainApi.get("users/" + id).then(({ data }) => setUser(data));
  }, []);

  return (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={user?.name} className={s.half} width="440px">
          ФИО
        </TextBox>
        <TextBox defaultValue={user?.username} className={s.half} width="440px">
          Никнейм
        </TextBox>
        <TextBox defaultValue={user?.email} className={s.half} width="440px">
          Email
        </TextBox>
        <TextBox defaultValue={user?.website} className={s.half} width="440px">
          Вебсайт
        </TextBox>
        <TextBox defaultValue={user?.phone} className={s.half} width="440px">
          Телефон
        </TextBox>
      </div>
      <div className={s.block}>
        <h2>Адрес</h2>
        <TextBox defaultValue={user?.address.zipcode} width="440px">
          Индекс
        </TextBox>
        <TextBox defaultValue={user?.address.city} width="440px">
          Город
        </TextBox>
        <TextBox defaultValue={user?.address.street}>Улица</TextBox>
      </div>
      <div className={s.block}>
        <h2>Компания</h2>
        <TextBox defaultValue={user?.company.name}>Название</TextBox>
        <TextBox defaultValue={user?.company.catchPhrase} textarea={true}>
          Описание
        </TextBox>
      </div>
      <SaveButton>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  );
};

export default EditUser;
