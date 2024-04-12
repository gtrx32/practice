import { useContext, useEffect, useState } from "react";
import mainApi from "../api/api";
import getRelatedResourceName from "../utils/getRelatedResourceName";
import getRelatedResourceId from "../utils/getRelatedResourceId";
import ResourceNameContext from "../context/ResourceNameContext";

interface useDetailsDataProps {
  dataId?: string;
}

export const useDetailsData = ({ dataId }: useDetailsDataProps) => {
  const resourceName = useContext(ResourceNameContext);

  const [data, setData] = useState<DataType | null>(null);
  const [relatedData, setRelatedData] = useState<RelatedDataType | null>(null);
  const [relatedPath, setRelatedPath] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .get(resourceName + "/" + dataId)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        resourceName == "users" && setIsLoading(false);
      });
  }, [resourceName]);

  useEffect(() => {
    if (!data) return;

    const relatedResourceName = getRelatedResourceName(resourceName);
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

  return { data, relatedData, relatedPath, isLoading, isError };
};

export default useDetailsData;
