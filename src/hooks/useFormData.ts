import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAll, getById } from "../services/data";
import PageContext from "../context/PageContext";

export const useFormData = () => {
  const { pageType, resourceName, relatedResourceName, dataId } = useContext(PageContext);

  const {
    data: response,
    isError: isDataError,
    isPending: isDataPending,
  } = useQuery({
    queryKey: ["formData", resourceName, dataId],
    queryFn: () => getById(resourceName, dataId),
    enabled: pageType === "edit",
  });

  const data = response?.data as DataType;

  const {
    data: relatedResponse,
    isError: isRelatedDataError,
    isPending: isRelatedDataPending,
  } = useQuery({
    queryKey: ["formRelatedData", resourceName],
    queryFn: () => getAll(relatedResourceName),
    enabled: resourceName !== "users",
  });

  const relatedData = relatedResponse?.data as RelatedDataType[];

  const isLoading =
    resourceName === "users"
      ? pageType === "create"
        ? false
        : isDataPending
      : pageType === "create"
      ? isRelatedDataPending
      : isDataPending || isRelatedDataPending;
  const isError = isDataError || isRelatedDataError;

  return { data, relatedData, isLoading, isError };
};

export default useFormData;
