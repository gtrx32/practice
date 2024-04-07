import s from "./UsersDetailsPage.module.scss";
import DetailsData from "../../DetailsData";

interface UsersDetailsPageProps {
  data: UserType;
}

const UsersDetailsPage: React.FC<UsersDetailsPageProps> = ({ data }) => (
  <DetailsData
    rows={[
      {
        name: "id:",
        content: data.id,
        type: "text",
      },
      {
        name: "ФИО:",
        content: data.name,
        type: "text",
      },
      {
        name: "Никнейм:",
        content: data.username,
        type: "text",
      },
      {
        name: "E-mail:",
        content: data.email,
        type: "email",
      },
      {
        name: "Телефон:",
        content: data.phone,
        type: "text",
      },
      {
        name: "Адрес:",
        content: data.address.street + ", " + data.address.city + ", " + data.address.zipcode,
        type: "text",
      },
      {
        name: "Название компании:",
        content: data.company.name,
        type: "text",
      },
      {
        name: "Веб-сайт:",
        content: data.website,
        type: "link",
        url: "https://" + data.website,
      },
    ]}
  />
);

export default UsersDetailsPage;
