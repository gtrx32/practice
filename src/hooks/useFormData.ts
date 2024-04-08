import { useContext, useEffect, useState } from "react";
import mainApi from "../api/api";
import getRelatedTable from "../utils/getRelatedTable";
import ResourceNameContext from "../context/ResourceNameContext";

interface useFormDataProps {
  dataId?: string;
}

export const useFormData = ({ dataId }: useFormDataProps) => {
  const resourceName = useContext(ResourceNameContext);

  const [data, setData] = useState<DataType | null>(null);
  const [relatedData, setRelatedData] = useState<RelatedDataType[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!dataId) {
      if (resourceName === "users") setIsLoading(false);
      return;
    }

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
    if (resourceName === "users") return;

    const relatedResourceName = getRelatedTable(resourceName);

    if (relatedResourceName) {
      mainApi
        .get(relatedResourceName)
        .then((response) => {
          setRelatedData(response.data);
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, [data]);

  return { data, relatedData, isLoading, isError };
};

export default useFormData;
