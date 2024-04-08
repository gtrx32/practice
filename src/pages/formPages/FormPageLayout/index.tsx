import React, { ReactNode } from "react";
import TopPanel from "../../../components/TopPanel";
import Container from "../../../components/UI/Container";
import s from "./FormPageLayout.module.scss";

interface FormPageLayoutProps {
  pageType: "edit" | "create";
  children: ReactNode;
}

const FormPageLayout: React.FC<FormPageLayoutProps> = ({ pageType, children }) => {
  return (
    <Container className={s.container}>
      <TopPanel pageType={pageType} />

      <>{children}</>

      {/* 
        это нужно убрать в формы
        <SaveButton type="submit" onClick={onSave}>Сохранить изменения &#62;&#62;&#62;</SaveButton>
      */}
    </Container>
  );
};

export default FormPageLayout;