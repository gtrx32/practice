import { PropsWithChildren } from "react";
import useListData from "../../hooks/useListData";
import ListPageLayout from "./_components/ListPageLayout";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorPage from "../ErrorPage";

const ListPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, relatedData, isLoading, isError } = useListData();

  if (isError) return <ErrorPage type="fail" />;

  if (isLoading) return <LoadingSpinner />;

  return <ListPageLayout children={children} data={data} relatedData={relatedData} />;
};

export default ListPage;
