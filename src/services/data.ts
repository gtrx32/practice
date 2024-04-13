import mainApi from "../api/api";

export const getAll = async (resourceName: Resources) => {
  const { data } = await mainApi.get(resourceName);
  return data;
};

export const getById = async (resourceName: Resources, resourceId: number) => {
  const { data } = await mainApi.get(resourceName + "/" + resourceId);
  return data;
};
