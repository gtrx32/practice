import { PropsWithChildren } from "react";
import s from "./SaveButton.module.scss";
import clsx from "clsx";

interface SaveButtonProps extends PropsWithChildren {
  className?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ children, className }) => (
  <button className={clsx(s.button, className)}>{children}</button>
);

export default SaveButton;
