import { useContext } from "react";
import getRelatedResourceName from "../utils/getRelatedResourceName";
import getRelatedResourceId from "../utils/getRelatedResourceId";
import ResourceNameContext from "../context/ResourceNameContext";
import { useQuery } from "@tanstack/react-query";
import { getById } from "../services/service";

interface useDetailsDataProps {
  resourceId: string;
}

export const useDetailsData = ({ resourceId }: useDetailsDataProps) => {
  const resourceName = useContext(ResourceNameContext);
  const relatedResourceName = getRelatedResourceName(resourceName);

  const {
    data: data,
    isError: isDataError,
    isPending: isDataPending,
  } = useQuery<DataType>({
    queryKey: ["detailsData", resourceName, resourceId],
    queryFn: () => getById(resourceName, Number(resourceId)),
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
    enabled: resourceName !== "users",
  }) as { data: RelatedDataType | null; isError: boolean; isPending: boolean };

  const isLoading = resourceName === "users" ? isDataPending : isDataPending || isRelatedDataPending;

  const isError = isDataError || isRelatedDataError;

  return { data, relatedData, relatedPath, isLoading, isError };
};

export default useDetailsData;
