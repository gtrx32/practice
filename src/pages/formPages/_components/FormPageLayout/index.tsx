import React, { ReactNode } from "react";
import TopPanel from "../../../../components/TopPanel";
import Container from "../../../../components/UI/Container";
import s from "./FormPageLayout.module.scss";

interface FormPageLayoutProps {
  pageType: "edit" | "create";
  children: ReactNode;
}

const FormPageLayout: React.FC<FormPageLayoutProps> = ({ pageType, children }) => (
  <Container className={s.container}>
    <TopPanel pageType={pageType} />
    {children}
  </Container>
);

export default FormPageLayout;
