import { useContext } from "react";
import getRelatedResourceName from "../utils/getRelatedResourceName";
import ResourceNameContext from "../context/ResourceNameContext";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../services/service";

export const useListData = () => {
  const resourceName = useContext(ResourceNameContext);
  const relatedResourceName = getRelatedResourceName(resourceName);

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
