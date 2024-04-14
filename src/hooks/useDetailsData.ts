import { useContext } from "react";
import getRelatedResourceId from "../utils/getRelatedResourceId";
import { useQuery } from "@tanstack/react-query";
import { getById } from "../services/data";
import PageContext from "../context/PageContext";

export const useDetailsData = () => {
  const { resourceName, relatedResourceName, dataId } = useContext(PageContext);

  const {
    data: data,
    isError: isDataError,
    isPending: isDataPending,
  } = useQuery<DataType>({
    queryKey: ["detailsData", resourceName, dataId],
    queryFn: () => getById(resourceName, dataId),
  });

  const relatedResourceId = getRelatedResourceId(resourceName, data);
  const relatedPath = "/" + relatedResourceName + "/" + relatedResourceId;

  const {
    data: relatedData,
    isError: isRelatedDataError,
    isPending: isRelatedDataPending,
  } = useQuery<RelatedDataType>({
    queryKey: ["detailsRelatedData", resourceName, relatedResourceId],
    queryFn: () => getById(relatedResourceName, Number(relatedResourceId)),
    enabled: resourceName !== "users" && !!relatedResourceId,
  });

  const isLoading = resourceName === "users" ? isDataPending : isDataPending || isRelatedDataPending;

  const isError = isDataError || isRelatedDataError;

  return { data, relatedData, relatedPath, isLoading, isError };
};

export default useDetailsData;
