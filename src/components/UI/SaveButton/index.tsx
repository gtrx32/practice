import { MouseEventHandler, PropsWithChildren } from "react";
import s from "./SaveButton.module.scss";
import clsx from "clsx";

interface SaveButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ children, className, onClick }) => {
  const onHandleClick = () => {
    onClick?.();
  };
  return (
    <button onClick={onHandleClick} className={clsx(s.button, className)}>
      {children}
    </button>
  );
};

export default SaveButton;
