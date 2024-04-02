import { useContext, useEffect, useState } from "react";
import mainApi from "../api/api";
import { ResourceNameContext } from "../AppRouter";

export const useDataTable = () => {
  const table = useContext(ResourceNameContext);

  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .get(table)
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, isError };
};

export default useDataTable;
