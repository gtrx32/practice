import { PropsWithChildren } from "react";
import useDataTable from "../../hooks/useDataTable";
import ListPageLayout from "./ListPageLayout";
import LoadingSpinner from "../../components/LoadingSpinner";

export interface ListProps extends PropsWithChildren {
  title: string;
}

const ListPage: React.FC<ListProps> = (props: ListProps) => {
  const { data, relatedData, isLoading, isError } = useDataTable();

  if (isError) return <div>error</div>;

  if (isLoading) return <LoadingSpinner />;

  return <ListPageLayout {...props} data={data} relatedData={relatedData as RelatedDataType[]} />;
};

export default ListPage;
