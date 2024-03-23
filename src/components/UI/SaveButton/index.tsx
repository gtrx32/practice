import { PropsWithChildren } from "react";
import s from "./SaveButton.module.scss";
import clsx from "clsx";
import Button from "../Button";

interface SaveButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ children, className, onClick }) => {
  const onHandleClick = () => {
    onClick?.();
  };
  return (
    <Button onClick={onHandleClick} className={clsx(s.button, className)}>
      {children}
    </Button>
  );
};

export default SaveButton;
