import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../services/data";
import PageContext from "../context/PageContext";

export const useListData = () => {
  const { resourceName, relatedResourceName } = useContext(PageContext);

  const {
    data: data,
    isError: isDataError,
    isPending: isDataPending,
  } = useQuery<DataType[]>({
    queryKey: ["listData", resourceName],
    queryFn: () => getAll(resourceName),
  });

  const {
    data: relatedData,
    isError: isRelatedDataError,
    isPending: isRelatedDataPending,
  } = useQuery<RelatedDataType[]>({
    queryKey: ["listRelatedData", resourceName],
    queryFn: () => getAll(relatedResourceName),
    enabled: resourceName !== "users",
  });

  const isLoading = resourceName === "users" ? isDataPending : isDataPending || isRelatedDataPending;

  const isError = isDataError || isRelatedDataError;

  return { data, relatedData, isLoading, isError };
};

export default useListData;
