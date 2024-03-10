import s from "./LoadingSpinner.module.scss";
import spinner from "@assets/images/table/spinner.svg";

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.spinner} src={spinner} />
    </div>
  );
};

export default LoadingSpinner;
