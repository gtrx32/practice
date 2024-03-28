import s from "./ListPage.module.scss";
import React, { useState, useEffect } from "react";
import { getFilters, AreEqual, SelectPlaceholders } from "./types";
import UpperPanel from "./_components/UpperPanel";
import LoadingSpinner from "../../components/LoadingSpinner";
import Container from "../../components/UI/Container";
import mainApi from "../../api/api";
import Pagination from "./_components/Pagination";
import { Option } from "react-multi-select-component";
import FilterSelect from "./_components/FilterSelect";
import DesktopData from "./_components/DesktopData";
import getRelatedTable from "../../utils/getRelatedTable";
import MobileData from "./_components/MobileData";

interface ListPageProps {
  table: string;
}

const ListPage: React.FC<ListPageProps> = ({ table }) => {
  const [data, setData] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [displayedData, setDisplayedData] = useState<DataType[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<Option[]>([]);

  const [relatedData, setRelatedData] = useState<RelatedDataType[]>([]);
  const relatedTable = getRelatedTable(table);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

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
      selectedFilters.length > 0 && table !== "users"
        ? data.filter((item) => selectedFilters.some((option) => AreEqual(table, item, option)))
        : data
    );
  }, [data, selectedFilters]);

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
              filters={getFilters(table, relatedData)}
              placeholder={SelectPlaceholders[table as keyof typeof SelectPlaceholders]}
              onChange={(selected: Option[]) => setSelectedFilters(selected)}
            />
          )}
          <MobileData
            className={s.mobileData}
            table={table}
            displayedData={displayedData}
            relatedData={relatedData}
          ></MobileData>
          <DesktopData
            className={s.desktopData}
            table={table}
            displayedData={displayedData}
            relatedData={relatedData}
          ></DesktopData>
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
