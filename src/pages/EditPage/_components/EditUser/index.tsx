import { useContext, useEffect, useState } from "react";
import SaveButton from "../../../../components/UI/SaveButton";
import Input from "../../../../components/UI/Input";
import { UserType } from "../../types";
import s from "./EditUser.module.scss";
import mainApi from "../../../../api/api";
import { EditUserProps, initialValue } from "./types";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import CorrectInputContext from "../../../../context/CorrectInputContext";
import ValidatedInput from "../../../../components/UI/ValidatedInput";
import TextArea from "../../../../components/UI/TextArea";

const EditUser: React.FC<EditUserProps> = ({ id, edit }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [userResponse, setUserResponse] = useState<UserType>(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { fieldsIsValid } = useContext(CorrectInputContext);

  edit &&
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

  const handleInputChange = (fieldName: keyof UserType, value: string) => {
    setUserResponse((prevUser) => ({
      ...prevUser,
      [fieldName]: value,
    }));
  };

  const handleCompanyFieldChange = (fieldName: keyof UserType["company"], value: string) => {
    setUserResponse((prevUser) => ({
      ...prevUser,
      company: {
        ...prevUser.company,
        [fieldName]: value,
      },
    }));
  };

  const handleAddressFieldChange = (fieldName: keyof UserType["address"], value: string) => {
    setUserResponse((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [fieldName]: value,
      },
    }));
  };

  const onClickHandler = () => {
    if (!fieldsIsValid()) return;

    const method = edit ? "put" : "post";
    mainApi[method](edit ? "users/" + id : "users", {
      method: method.toUpperCase(),
      body: JSON.stringify(userResponse),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((json) => {
      console.log(json);
      edit ? navigate("/users/" + id) : navigate("/users/");
    });
  };

  return !isLoading ? (
    <div className={s.form}>
      <div className={s.block}>
        <ValidatedInput pattern="id" defaultValue={user?.id} onChange={(value) => handleInputChange("id", value)}>
          ID
        </ValidatedInput>
        <ValidatedInput
          pattern="default"
          onChange={(value) => handleInputChange("name", value)}
          defaultValue={user?.name}
          className={s.half}
          width="440px"
        >
          ФИО
        </ValidatedInput>
        <ValidatedInput
          pattern="default"
          onChange={(value) => handleInputChange("username", value)}
          defaultValue={user?.username}
          className={s.half}
          width="440px"
        >
          Никнейм
        </ValidatedInput>
        <ValidatedInput
          pattern="email"
          onChange={(value) => handleInputChange("email", value)}
          defaultValue={user?.email}
          className={s.half}
          width="440px"
        >
          Email
        </ValidatedInput>
        <Input
          onChange={(value) => handleInputChange("website", value)}
          defaultValue={user?.website}
          className={s.half}
          width="440px"
        >
          Вебсайт
        </Input>
        <ValidatedInput
          pattern="phone"
          onChange={(value) => handleInputChange("phone", value)}
          defaultValue={user?.phone}
          className={s.half}
          width="440px"
        >
          Телефон
        </ValidatedInput>
      </div>
      <div className={s.block}>
        <h2>Адрес</h2>
        <Input
          onChange={(value) => handleAddressFieldChange("zipcode", value)}
          defaultValue={user?.address.zipcode}
          width="440px"
        >
          Индекс
        </Input>
        <Input
          onChange={(value) => handleAddressFieldChange("city", value)}
          defaultValue={user?.address.city}
          width="440px"
        >
          Город
        </Input>
        <Input onChange={(value) => handleAddressFieldChange("street", value)} defaultValue={user?.address.street}>
          Улица
        </Input>
      </div>
      <div className={s.block}>
        <h2>Компания</h2>
        <ValidatedInput
          pattern="default"
          onChange={(value) => handleCompanyFieldChange("name", value)}
          defaultValue={user?.company.name}
        >
          Название
        </ValidatedInput>
        <TextArea
          onChange={(value) => handleCompanyFieldChange("catchPhrase", value)}
          defaultValue={user?.company.catchPhrase}
        >
          Описание
        </TextArea>
      </div>
      <SaveButton onClick={onClickHandler}>Сохранить изменения &#62;&#62;&#62; </SaveButton>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default EditUser;
