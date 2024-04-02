import { useContext, useEffect, useState } from "react";
import mainApi from "../api/api";
import { ResourceNameContext } from "../AppRouter";
import getRelatedTable from "../utils/getRelatedTable";

export const useDataTable = () => {
  const resourceName = useContext(ResourceNameContext);
  const relatedResourceName = getRelatedTable(resourceName);

  const [data, setData] = useState<DataType[]>([]);
  const [relatedData, setRelatedData] = useState<RelatedDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    Promise.all([mainApi.get(resourceName), mainApi.get(relatedResourceName)])
      .then(([{ data: data }, { data: relatedData }]) => {
        setData(data);
        setRelatedData(relatedData);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, relatedData, isLoading, isError };
};

export default useDataTable;
