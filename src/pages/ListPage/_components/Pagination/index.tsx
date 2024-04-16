import { useEffect, useState } from "react";
import Button from "../../../../components/UI/Button";
import s from "./Pagination.module.scss";
import { generateButtons as generateButtons } from "./types";
import { useDataParams } from "../../../../hooks/useDataParams";

interface PaginationProps {
  totalCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalCount }) => {
  const { setParam } = useDataParams();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [showInput, setShowInput] = useState(false);
  const pagesCount = Math.ceil(totalCount / limit);

  const pages = generateButtons(page, Math.ceil(totalCount / limit));
  page > pages[pages.length - 1] ? setPage(pages[pages.length - 1]) : null;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  useEffect(() => {
    setParam("_page", page);
  }, [page]);

  useEffect(() => {
    setParam("_limit", limit);
  }, [limit]);

  const onPrevPageClick = () => page > 1 && setPage(page - 1);
  const onNextPageClick = () => page < pagesCount && setPage(page + 1);
  const onCustomPageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputPage = form.querySelector<HTMLInputElement>("input")?.value;
    if (inputPage) {
      setPage(parseInt(inputPage));
    }
    setShowInput(false);
  };

  const onLimitChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => setLimit(Number(value));

  return (
    <div className={s.wrapper}>
      {!showInput ? (
        <div className={s.pagination}>
          <Button onClick={onPrevPageClick}>&#60; Назад</Button>
          {pages.map((button, index) =>
            button !== -1 ? (
              <Button
                className={button === page ? s.currentPage : ""}
                disabled={button === page}
                onClick={() => setPage(button)}
                key={index}
              >
                {button}
              </Button>
            ) : (
              <Button onClick={() => setShowInput(true)} key={index}>
                ...
              </Button>
            )
          )}
          <Button onClick={onNextPageClick}>Далее &#62;</Button>
        </div>
      ) : (
        <form onSubmit={onCustomPageSubmit} className={s.pagination}>
          <Button type="submit">Перейти</Button>
          <input className={s.formInput} type="number" min={1} max={pagesCount} defaultValue={page} />
          <Button onClick={() => setShowInput(false)} type="submit">
            &#10006;
          </Button>
        </form>
      )}
      <div className={s.rows}>
        <div className={s.rowsPerPage}>
          Строк на странице:
          <select className={s.selectCount} value={limit} onChange={onLimitChange}>
            {[5, 10, 15, 20].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={s.showRows}>
          {startIndex + 1}-{endIndex > totalCount ? totalCount : endIndex} из {totalCount}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
