import { useSearchParams } from "react-router-dom";

export const useDataParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParamsString = (): string => {
    const paramsString = new URLSearchParams();

    searchParams.forEach((value, name) => {
      value.includes(",")
        ? value.split(",").forEach((val) => paramsString.append(name, val))
        : paramsString.append(name, value);
    });

    return paramsString.toString();
  };

  const getParamsArray = (): string[] => {
    const paramsArray: string[] = [];

    searchParams.forEach((value, name) => {
      value.includes(",")
        ? value.split(",").forEach((val) => paramsArray.push(`${name}=${val}`))
        : paramsArray.push(`${name}=${value}`);
    });

    return paramsArray.sort();
  };

  const getParam = (name: string): string => {
    const value = searchParams.get(name) ?? "";
    return value;
  };

  const setParam = (name: string, value: number | string): void => {
    value.toString() !== ""
      ? setSearchParams((params) => {
          params.set(name, value.toString());
          return params;
        })
      : setSearchParams((params) => {
          params.delete(name);
          return params;
        });
  };

  const getParamValues = (name: string): number[] => {
    return searchParams.has(name)
      ? searchParams
          .getAll(name)[0]
          .split(",")
          .map((value) => Number(value))
      : [];
  };

  const setParamValues = (name: string, values: number[] | string[]): void => {
    setSearchParams((params) => {
      values.length > 0 ? params.set(name, values.join(",")) : params.delete(name);
      return params;
    });
  };

  return { searchParams, getParamsString, getParamsArray, getParam, setParam, getParamValues, setParamValues };
};
