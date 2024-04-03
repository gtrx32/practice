import { DataTableRowClickEvent } from "primereact/datatable";

export const getDetailsPagePath = (resourceName: string, { data }: DataTableRowClickEvent): string => {
  const { id } = data as { id: number };
  return `/${resourceName}/${id}`;
};
