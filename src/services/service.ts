import mainApi from "../api/api";

const getAll = async (resourceName: string) => {
  const { data } = await mainApi.get(resourceName);
  return data;
};

const getById = async (resourceName: string, resourceId: number) => {
  const { data } = await mainApi.get(resourceName + "/" + resourceId);
  return data;
};
