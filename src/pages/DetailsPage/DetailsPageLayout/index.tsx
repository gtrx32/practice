import { PropsWithChildren } from "react";
import s from "./DetailsPageLayout.module.scss";
import Container from "../../../components/UI/Container";
import TopPanel from "../../../components/TopPanel";
import DetailsDataContext from "../../../context/DetailsDataContext";

interface DetailsPageLayoutProps extends PropsWithChildren {
  data: DataType;
  resourceId: string;
  relatedData: RelatedDataType;
  relatedPath: string;
}

const DetailsPageLayout: React.FC<DetailsPageLayoutProps> = ({
  children,
  data,
  resourceId,
  relatedData,
  relatedPath,
}) => {
  return (
    <Container className={s.container}>
      <TopPanel pageType="details" id={resourceId} />

      <DetailsDataContext.Provider value={{ data: data, relatedData: relatedData, relatedPath: relatedPath }}>
        {children}
      </DetailsDataContext.Provider>
    </Container>
  );
};

export default DetailsPageLayout; 
