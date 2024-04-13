import React, { PropsWithChildren } from "react";
import TopPanel from "../../../../components/TopPanel";
import Container from "../../../../components/UI/Container";
import s from "./FormPageLayout.module.scss";

const FormPageLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Container className={s.container}>
    <TopPanel />
    {children}
  </Container>
);

export default FormPageLayout;
