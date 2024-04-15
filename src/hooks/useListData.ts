import { useContext } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAll } from "../services/data";
import PageContext from "../context/PageContext";
import { useDataParams } from "./useDataParams";

export const useListData = () => {
  const { resourceName, relatedResourceName } = useContext(PageContext);
  const { getParamsArray, getParamsString } = useDataParams();

  const params = "?" + getParamsString();

  const {
    data: response,
    isError: isDataError,
    isPending: isDataPending,
  } = useQuery({
    queryKey: ["listData", resourceName, getParamsArray()],
    queryFn: () => getAll(resourceName, params),
    placeholderData: keepPreviousData,
  });

  const data = response?.data as DataType[];
  const totalCount: any = response?.headers["x-total-count"] ?? data?.length;

  const {
    data: relatedResponse,
    isError: isRelatedDataError,
    isPending: isRelatedDataPending,
  } = useQuery({
    queryKey: ["listRelatedData", resourceName],
    queryFn: () => getAll(relatedResourceName),
    enabled: resourceName !== "users",
  });

  const relatedData = relatedResponse?.data as RelatedDataType[];

  const isLoading = resourceName === "users" ? isDataPending : isDataPending || isRelatedDataPending;
  const isError = isDataError || isRelatedDataError;

  return { data, relatedData, isLoading, isError, totalCount };
};

export default useListData;
