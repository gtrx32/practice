import { PropsWithChildren, useContext } from "react";
import s from "./DetailsPageLayout.module.scss";
import Container from "../../../../components/UI/Container";
import TopPanel from "../../../../components/TopPanel";
import ResourceNameContext from "../../../../context/ResourceNameContext";
import UserLinks from "../../../../components/UserLinks";
import DetailsDataContext from "../../../../context/DetailsDataContext";

interface DetailsPageLayoutProps extends PropsWithChildren {
  data: DataType;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const DetailsPageLayout: React.FC<DetailsPageLayoutProps> = ({ data, relatedData, relatedPath, children }) => {
  const resourceName = useContext(ResourceNameContext);

  return (
    <Container className={s.container}>
      <TopPanel pageType="details" />

      {resourceName === "users" && <UserLinks />}

      <DetailsDataContext.Provider value={{ data: data, relatedData: relatedData, relatedPath: relatedPath }}>
        {children}
      </DetailsDataContext.Provider>
    </Container>
  );
};

export default DetailsPageLayout;
