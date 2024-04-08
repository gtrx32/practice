import { PropsWithChildren } from "react";
import useListData from "../../hooks/useListData";
import ListPageLayout from "./ListPageLayout";
import LoadingSpinner from "../../components/LoadingSpinner";

const ListPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { data, relatedData, isLoading, isError } = useListData();

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return <ListPageLayout children={children} data={data} relatedData={relatedData} />;
};

export default ListPage;
