import { PropsWithChildren, useContext } from "react";
import s from "./DetailsPageLayout.module.scss";
import Container from "../../../../components/UI/Container";
import TopPanel from "../../../../components/TopPanel";
import PageContext from "../../../../context/PageContext";
import UserLinks from "../../../../components/UserLinks";
import DetailsDataContext from "../../../../context/DetailsDataContext";

interface DetailsPageLayoutProps extends PropsWithChildren {
  data: DataType;
  relatedData: RelatedDataType | null;
  relatedPath: string;
}

const DetailsPageLayout: React.FC<DetailsPageLayoutProps> = ({ data, relatedData, relatedPath, children }) => {
  const { resourceName, dataId } = useContext(PageContext);

  return (
    <Container className={s.container}>
      <TopPanel />

      {resourceName === "users" && <UserLinks dataId={dataId} />}

      <DetailsDataContext.Provider value={{ data: data, relatedData: relatedData, relatedPath: relatedPath }}>
        {children}
      </DetailsDataContext.Provider>
    </Container>
  );
};

export default DetailsPageLayout;
