import { useContext, useEffect, useState } from "react";
import s from "./ValidatedInput.module.scss";
import { ValidatedInputProps, patterns } from "./types";
import CorrectInputContext from "../../../context/CorrectInputContext";
import clsx from "clsx";
import Input from "../Input";

const ValidatedInput: React.FC<ValidatedInputProps> = ({
  defaultValue = "",
  className,
  children,
  pattern = "none",
  ...props
}) => {
  const { setFields } = useContext(CorrectInputContext);
  const [isCorrect, setIsCorrect] = useState<boolean>(pattern ? patterns[pattern].test(defaultValue.toString()) : true);

  useEffect(() => {
    const validateFields = (key: string, value: boolean) => setFields((prev) => ({ ...prev, [key]: value }));
    validateFields(pattern, isCorrect);
  }, [isCorrect]);

  const validate = (value: string) => setIsCorrect(patterns[pattern].test(value));

  return (
    <Input
      className={clsx(className, !isCorrect && s.notCorrect)}
      defaultValue={defaultValue}
      validate={validate}
      {...props}
    >
      {children}
    </Input>
  );
};

export default ValidatedInput;
