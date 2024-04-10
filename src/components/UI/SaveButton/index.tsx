import { ButtonHTMLAttributes } from "react";
import s from "./SaveButton.module.scss";
import clsx from "clsx";
import Button from "../Button";

interface SaveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ children, className, onClick }) => (
  <Button type="submit" onClick={onClick} className={clsx(s.button, className)}>
    {children}
  </Button>
);

export default SaveButton;
