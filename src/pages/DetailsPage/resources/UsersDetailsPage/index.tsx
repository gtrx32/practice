import { useContext } from "react";
import s from "./UsersDetailsPage.module.scss";
import DetailsDataContext from "../../../../context/DetailsDataContext";

interface UsersDetailsPageProps {}

const UsersDetailsPage: React.FC<UsersDetailsPageProps> = () => {
  const { data, relatedData, relatedPath } = useContext(DetailsDataContext);

  console.log(data);
  console.log(relatedData);
  console.log(relatedPath);
  return <div>aaaaaaaaaaaaaaaaaaaaa</div>;
};

export default UsersDetailsPage;
