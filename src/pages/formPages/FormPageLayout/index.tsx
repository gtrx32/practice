import React, { ReactNode, useContext } from "react";
import TopPanel from "../../../components/TopPanel";
import Container from "../../../components/UI/Container";
import s from "./FormPageLayout.module.scss";
import FormSubmitContext from "../../../context/FormSubmitContext/FormSubmitContext";
import Input from "../../../components/UI/Input";
import CheckBox from "../../../components/UI/CheckBox";
import TextArea from "../../../components/UI/TextArea";

interface FormPageLayoutProps {
  pageType: "edit" | "create";
  children: ReactNode;
}

const FormPageLayout: React.FC<FormPageLayoutProps> = ({ pageType, children }) => {
  const { onSave } = useContext(FormSubmitContext);

  return (
    <Container className={s.container}>
      <TopPanel pageType={pageType} />
      <>{children}</>

      {/* 
        форма тут временно, дальше надо сделать каждому ресурсу свою в отдельных компонентах

        это нужно убрать в формы
        <SaveButton type="submit" onClick={onSave}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
      */}

      <form onSubmit={onSave}>
        <Input registerName="title">имя</Input>
        <CheckBox registerName="completed">helo</CheckBox>
        <TextArea registerName="body">bade</TextArea>
        <button type="submit">asgasg</button>
      </form>
    </Container>
  );
};

export default FormPageLayout;
