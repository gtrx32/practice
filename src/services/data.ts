import mainApi from "../api/api";

export const getAll = async (resourceName: Resources) => {
  const response = await mainApi.get(resourceName);
  return response;
};

export const getById = async (resourceName: Resources, resourceId: number) => {
  const response = await mainApi.get(resourceName + "/" + resourceId);
  return response;
};

export const create = async (data: DataType, resourceName: Resources) => {
  const response = await mainApi.post(resourceName, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response;
};

export const edit = async (data: DataType, resourceName: Resources, dataId: number) => {
  const response = await mainApi.put(resourceName + "/" + dataId, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response;
};

export const remove = async (resourceName: Resources, dataId: number) => {
  const response = await mainApi.delete(resourceName + "/" + dataId, { method: "DELETE" });
  return response;
};
