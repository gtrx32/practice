import mainApi from "../api/api";

export const getAll = async (resourceName: string) => {
  const { data } = await mainApi.get(resourceName);
  return data;
};

export const getById = async (resourceName: string, resourceId: number | string) => {
  const { data } = await mainApi.get(resourceName + "/" + resourceId);
  return data;
};
