import s from "./ErrorPage.module.scss";
import fail from "@assets/images/fail.png";
import notFound from "@assets/images/notFound.png";

interface ErrorPageProps {
  type: "notFound" | "fail";
}

const ErrorPage: React.FC<ErrorPageProps> = ({ type }) => (
  <div className={s.wrapper}>
    <img src={type === "notFound" ? notFound : fail} className={s.errorImage} />
    <div className={s.errorText}>{type === "notFound" ? "Ресурс не найден" : "Произошла ошибка"}</div>
  </div>
);

export default ErrorPage;
