import { useContext } from "react";
import DetailsDataContext from "../../../../../context/DetailsDataContext";
import DataRow from "../../../_components/DataRow";

const UsersDetails = () => {
  const { data } = useContext(DetailsDataContext);

  return (
    <div>
      <DataRow name="id" content={(data as UserType).id} type="text" />
      <DataRow name="ФИО" content={(data as UserType).name} type="text" />
      <DataRow name="Никнейм" content={(data as UserType).username} type="text" />
      <DataRow name="E-mail" content={(data as UserType).email} type="email" />
      <DataRow name="Телефон" content={(data as UserType).phone} type="text" />
      <DataRow
        name="Адрес"
        content={
          (data as UserType).address.street +
          ", " +
          (data as UserType).address.city +
          ", " +
          (data as UserType).address.zipcode
        }
        type="text"
      />
      <DataRow name="Название компании" content={(data as UserType).company.name} type="text" />
      <DataRow
        name="Веб-сайт"
        content={(data as UserType).website}
        type="link"
        url={"https://" + (data as UserType)?.website}
      />
    </div>
  );
};

export default UsersDetails;
