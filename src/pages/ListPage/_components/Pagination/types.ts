import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  rowCount: number;
  startIndex: number;
  endIndex: number;
  currentPage: number;
  rowsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
}
