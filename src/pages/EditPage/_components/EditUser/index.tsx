import { useEffect, useState } from "react";
import SaveButton from "../../../../components/UI/SaveButton";
import TextBox from "../../../../components/UI/TextBox";
import { UserType } from "../../types";
import s from "./EditUser.module.scss";
import mainApi from "../../../../api/api";
import { EditUserProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";

const EditUser: React.FC<EditUserProps> = ({ id }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [userResponse, setUserResponse] = useState<UserType>(initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .get("users/" + id)
      .then(({ data }) => {
        setUser(data);
        setUserResponse(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const handleTextBoxChange = (fieldName: string, value: string) => {
    setUserResponse((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  const handleCompanyFieldChange = (fieldName: string, value: string) => {
    setUserResponse((prevUser) => ({
      ...prevUser,
      company: {
        ...prevUser.company,
        [fieldName]: value,
      },
    }));
  };

  const handleAddressFieldChange = (fieldName: string, value: string) => {
    setUserResponse((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [fieldName]: value,
      },
    }));
  };

  const onClickHandler = () => {
    mainApi
      .put("users/" + id, {
        method: "PUT",
        body: JSON.stringify(userResponse),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((json) => {
        console.log(json);
        navigate("/users/" + id);
      });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <TextBox defaultValue={user?.id} onChange={(value) => handleTextBoxChange("id", value)}>
          ID
        </TextBox>
        <TextBox
          onChange={(value) => handleTextBoxChange("name", value)}
          defaultValue={user?.name}
          className={s.half}
          width="440px"
        >
          ФИО
        </TextBox>
        <TextBox
          onChange={(value) => handleTextBoxChange("username", value)}
          defaultValue={user?.username}
          className={s.half}
          width="440px"
        >
          Никнейм
        </TextBox>
        <TextBox
          onChange={(value) => handleTextBoxChange("email", value)}
          defaultValue={user?.email}
          className={s.half}
          width="440px"
        >
          Email
        </TextBox>
        <TextBox
          onChange={(value) => handleTextBoxChange("website", value)}
          defaultValue={user?.website}
          className={s.half}
          width="440px"
        >
          Вебсайт
        </TextBox>
        <TextBox
          onChange={(value) => handleTextBoxChange("phone", value)}
          defaultValue={user?.phone}
          className={s.half}
          width="440px"
        >
          Телефон
        </TextBox>
      </div>
      <div className={s.block}>
        <h2>Адрес</h2>
        <TextBox
          onChange={(value) => handleAddressFieldChange("zipcode", value)}
          defaultValue={user?.address.zipcode}
          width="440px"
        >
          Индекс
        </TextBox>
        <TextBox
          onChange={(value) => handleAddressFieldChange("city", value)}
          defaultValue={user?.address.city}
          width="440px"
        >
          Город
        </TextBox>
        <TextBox onChange={(value) => handleAddressFieldChange("street", value)} defaultValue={user?.address.street}>
          Улица
        </TextBox>
      </div>
      <div className={s.block}>
        <h2>Компания</h2>
        <TextBox onChange={(value) => handleCompanyFieldChange("name", value)} defaultValue={user?.company.name}>
          Название
        </TextBox>
        <TextBox
          onChange={(value) => handleCompanyFieldChange("catchPhrase", value)}
          defaultValue={user?.company.catchPhrase}
          textarea={true}
        >
          Описание
        </TextBox>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditUser;
