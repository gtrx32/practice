import { useEffect, useState } from "react";
import mainApi from "../api/api";
import getRelatedTable from "../utils/getRelatedTable";
import { useLocation } from "react-router-dom";
import { getRelatedResourceId } from "../utils/getRelatedResourceId";

export const useDetailsData = () => {
  const { pathname } = useLocation();
  const [resourceName, resourceId] = pathname.split("/").slice(1);

  const [data, setData] = useState<DataType | null>(null);
  const [relatedData, setRelatedData] = useState<RelatedDataType | null>(null);
  const [relatedPath, setRelatedPath] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .get(resourceName + "/" + resourceId)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        resourceName == "users" && setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!data) return;

    const relatedResourceName = getRelatedTable(resourceName);
    const relatedResourceId = getRelatedResourceId(resourceName, data);

    if (relatedResourceName && relatedResourceId) {
      mainApi
        .get(relatedResourceName + "/" + relatedResourceId)
        .then((response) => {
          setRelatedPath("/" + relatedResourceName + "/" + relatedResourceId);
          setRelatedData(response.data);
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, [data]);

  return { data, resourceId, relatedData, relatedPath, isLoading, isError };
};

export default useDetailsData;
