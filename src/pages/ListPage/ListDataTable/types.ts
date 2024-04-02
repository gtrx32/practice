import { DataTableRowClickEvent } from "primereact/datatable";

export const getDetailsPagePath = (table: string, { data }: DataTableRowClickEvent): string => {
  const { id } = data as { id: number };
  return `/${table}/${id}`;
};
