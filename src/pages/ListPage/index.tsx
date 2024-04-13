import { PropsWithChildren, useContext } from "react";
import useListData from "../../hooks/useListData";
import ListPageLayout from "./_components/ListPageLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPage from "../ErrorPage";
import PageContext from "../../context/PageContext";

const ListPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { resourceName } = useContext(PageContext);
  const { data, relatedData, isLoading, isError } = useListData();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorPage type="fail" />;

  return (
    data &&
    (resourceName === "users" || relatedData) && (
      <ListPageLayout children={children} data={data as DataType[]} relatedData={relatedData as RelatedDataType[]} />
    )
  );
};

export default ListPage;
