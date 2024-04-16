import s from "./ListPageLayout.module.scss";
import ListDataContext from "../../../../context/ListDataContext";
import Pagination from "../../_components/Pagination";
import { PropsWithChildren, useContext } from "react";
import UpperPanel from "../../_components/UpperPanel";
import RelatedFilter from "../../_components/RelatedFilter";
import { SelectPlaceholders, getFilters } from "./types";
import Container from "../../../../components/UI/Container";
import PageContext from "../../../../context/PageContext";

interface ListPageLayoutProps extends PropsWithChildren {
  data: DataType[];
  relatedData: RelatedDataType[];
  totalCount: number;
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children, data, relatedData, totalCount }) => {
  const { resourceName } = useContext(PageContext);

  return (
    <Container className={s.container}>
      <UpperPanel />

      {resourceName !== "users" && (
        <RelatedFilter
          filters={getFilters(resourceName, relatedData)}
          placeholder={SelectPlaceholders[resourceName as keyof typeof SelectPlaceholders]}
        />
      )}

      <ListDataContext.Provider value={{ data, relatedData: relatedData }}>{children}</ListDataContext.Provider>

      <Pagination totalCount={totalCount} />
    </Container>
  );
};

export default ListPageLayout;
