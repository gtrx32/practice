import { useContext } from "react";
import getRelatedResourceName from "../utils/getRelatedResourceName";
import ResourceNameContext from "../context/ResourceNameContext";
import { useQuery } from "@tanstack/react-query";
import { getAll, getById } from "../services/service";
import { useLocation } from "react-router-dom";

interface useFormDataProps {
  resourceId?: string;
}

export const useFormData = ({ resourceId }: useFormDataProps) => {
  const resourceName = useContext(ResourceNameContext);
  const relatedResourceName = getRelatedResourceName(resourceName);
  const { pathname } = useLocation();
  const pageType = pathname.split("/").pop();

  const {
    data: data,
    isError: isDataError,
    isPending: isDataPending,
  } = useQuery<DataType>({
    queryKey: ["formData", resourceName, resourceId],
    queryFn: () => getById(resourceName, Number(resourceId)),
    enabled: pageType === "edit",
  });

  const {
    data: relatedData,
    isError: isRelatedDataError,
    isPending: isRelatedDataPending,
  } = useQuery<RelatedDataType[]>({
    queryKey: ["formRelatedData", resourceName],
    queryFn: () => getAll(relatedResourceName),
    enabled: resourceName !== "users",
  });

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
