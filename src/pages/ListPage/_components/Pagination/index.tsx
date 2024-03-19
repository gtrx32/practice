import { useEffect, useState } from "react";
import Button from "../../../../components/UI/Button";
import s from "./Pagination.module.scss";
import { PaginationProps } from "./types";

const Pagination: React.FC<PaginationProps> = ({
  rowCount,
  startIndex,
  endIndex,
  currentPage,
  rowsPerPage,
  setCurrentPage,
  setRowsPerPage,
}) => {
  const [pagesCount, setPagesCount] = useState<number>(1);
  const [displayedPages, setDisplayedPages] = useState<number[]>([]);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [customPage, setCustomPage] = useState<string>(currentPage.toString());

  const generateDisplayedPages = (currentPage: number, pageCount: number) => {
    const firstPage = 1;
    const lastPage = pageCount;
    const prevPage = Math.max(currentPage - 1, firstPage);
    const nextPage = Math.min(currentPage + 1, lastPage);
    const displayedPages: number[] = [];

    displayedPages.push(firstPage);
    prevPage > firstPage + 1 && displayedPages.push(-1);
    prevPage !== firstPage && displayedPages.push(prevPage);
    displayedPages.push(currentPage);
    nextPage !== lastPage && displayedPages.push(nextPage);
    nextPage < lastPage - 1 && displayedPages.push(-1);
    displayedPages.push(lastPage);

    const uniqueDisplayedPages = displayedPages.filter((page, index, array) => {
      return page === -1 ? true : array.indexOf(page) === index;
    });

    setDisplayedPages(uniqueDisplayedPages);
  };

  useEffect(() => {
    if (rowCount > 0) setPagesCount(Math.ceil(rowCount / rowsPerPage));
    setCurrentPage(1);
  }, [rowCount, rowsPerPage]);

  useEffect(() => {
    generateDisplayedPages(currentPage, pagesCount);
    setCustomPage(currentPage.toString());
  }, [pagesCount, currentPage]);

  const handlePrevPageClick = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPageClick = () => currentPage < pagesCount && setCurrentPage(currentPage + 1);

  const handleRowsPerPageChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) =>
    setRowsPerPage(Number(value));

  const handleCustomPageChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setCustomPage(value);
  const handleCustomPageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pageNumber = parseInt(customPage);
    if (isNaN(pageNumber)) setShowInput(false);
    else if (pageNumber >= 1 && pageNumber <= pagesCount) {
      setCurrentPage(pageNumber);
      setCustomPage(currentPage.toString());
      setShowInput(false);
    }
  };

  return (
    <div className={s.wrapper}>
      {!showInput ? (
        <div className={s.pagination}>
          <Button onClick={handlePrevPageClick}>&#60; Назад</Button>
          {displayedPages.map((page, index) =>
            page !== -1 ? (
              <Button
                className={page === currentPage ? s.currentPage : ""}
                disabled={page === currentPage}
                onClick={() => setCurrentPage(page)}
                key={index}
              >
                {page}
              </Button>
            ) : (
              <Button onClick={() => setShowInput(true)} key={index}>
                ...
              </Button>
            )
          )}
          <Button onClick={handleNextPageClick}>Далее &#62;</Button>
        </div>
      ) : (
        <form onSubmit={handleCustomPageSubmit} className={s.pagination}>
          <Button type="submit">Перейти</Button>
          <input
            className={s.formInput}
            type="number"
            min={1}
            max={pagesCount}
            value={customPage}
            onChange={handleCustomPageChange}
          />
          <Button type="submit">&#10006;</Button>
        </form>
      )}
      <div className={s.rows}>
        <div className={s.rowsPerPage}>
          Строк на странице:
          <select className={s.selectCount} value={rowsPerPage} onChange={handleRowsPerPageChange}>
            {[5, 10, 15, 20].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={s.showRows}>
          {startIndex + 1}-{endIndex > rowCount ? rowCount : endIndex} из {rowCount}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
