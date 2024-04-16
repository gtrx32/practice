import { PropsWithChildren } from "react";
import useListData from "../../hooks/useListData";
import ListPageLayout from "./_components/ListPageLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPage from "../ErrorPage";

const ListPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, relatedData, isLoading, isError, totalCount } = useListData();

  if (isLoading) return <LoadingSpinner />;

  if (isError) return <ErrorPage type="fail" />;

  return (
    <ListPageLayout
      children={children}
      data={data as DataType[]}
      relatedData={relatedData as RelatedDataType[]}
      totalCount={totalCount}
    />
  );
};

export default ListPage;
