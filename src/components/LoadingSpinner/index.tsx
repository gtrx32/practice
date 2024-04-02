import { Spinner } from "../../assets/images/icons";
import s from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => (
  <div className={s.wrapper}>
    <Spinner className={s.spinner} />
  </div>
);

export default LoadingSpinner;
