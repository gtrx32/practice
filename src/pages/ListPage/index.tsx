import s from "./ListPage.module.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Columns, getItemById, getOptions, getDetailsPagePath } from "./types";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import UpperPanel from "./_components/UpperPanel";
import LoadingSpinner from "../../components/LoadingSpinner";
import Container from "../../components/UI/Container";
import mainApi from "../../api/api";
import Pagination from "./_components/Pagination";
import { AlbumType, CommentType, PhotoType, PostType, TodoType, UserType } from "../EditPage/types";
import CustomBodyTemplate from "./_components/CustomBodyTemplate";
import { getRelatedTable } from "../DetailsPage/types";
import { Option } from "react-multi-select-component";
import FilterSelect from "./_components/FilterSelect";

interface ListPageProps {
  table: string;
}

const ListPage: React.FC<ListPageProps> = ({ table }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState<Option[]>([]);
  const [displayedData, setDisplayedData] = useState([]);

  const [relatedData, setRelatedData] = useState<UserType[] | AlbumType[] | PostType[]>([]);
  const relatedTable = getRelatedTable(table);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([mainApi.get(table), mainApi.get(relatedTable)])
      .then(([data, relatedData]) => {
        setData(data.data);
        setRelatedData(relatedData.data);
      })
      .catch(() => setIsError(true));
  }, [table]);

  useEffect(() => {
    setFilteredData(
      selectedData.length > 0
        ? data.filter((item) => {
            return selectedData.some((option) => {
              switch (table) {
                case "todos":
                case "albums":
                case "posts":
                  return option.value === (item as TodoType).userId;
                case "photos":
                  return option.value === (item as PhotoType).albumId;
                case "comments":
                  return option.value === (item as CommentType).postId;
                default:
                  return false;
              }
            });
          })
        : data
    );
  }, [data, selectedData]);

  useEffect(() => {
    setDisplayedData(filteredData.slice(startIndex, endIndex));
  }, [filteredData, startIndex, endIndex]);

  useEffect(() => {
    if (displayedData.length > 0) setIsLoading(false);
  }, [displayedData]);

  return (
    <Container className={s.container}>
      <UpperPanel table={table} />
      {isError ? (
        <p>Произошла ошибка при загрузке данных</p>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {table !== "users" && (
            <FilterSelect
              options={getOptions(table, relatedData)}
              placeholder="test"
              onChange={(selected: Option[]) => setSelectedData(selected)}
            />
          )}
          <DataTable
            value={displayedData}
            scrollable
            onRowClick={(event) => navigate(getDetailsPagePath(table, event))}
          >
            {Columns[table as keyof typeof Columns].map(({ field, header, width }) => (
              <Column
                key={field}
                header={header}
                body={(rowData) => (
                  <CustomBodyTemplate
                    table={table}
                    field={field}
                    rowData={rowData}
                    getItemById={(id: number) => getItemById(id, relatedData)}
                  />
                )}
                field={field}
                sortable
                style={{ width: width, maxWidth: width }}
              />
            ))}
          </DataTable>
        </>
      )}
      <Pagination
        rowCount={filteredData.length}
        startIndex={startIndex}
        endIndex={endIndex}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        setRowsPerPage={setRowsPerPage}
      />
    </Container>
  );
};

export default ListPage;
