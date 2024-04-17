import { useRef, useState } from "react";
import Button from "../../../../components/UI/Button";
import s from "./Pagination.module.scss";
import { generateButtons as generateButtons } from "./types";
import { useDataParams } from "../../../../hooks/useDataParams";

interface PaginationProps {
  totalCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalCount }) => {
  const { setParam, getParam } = useDataParams();

  const [page, setPage] = useState(getParam("_page") ? Number(getParam("_page")) : 1);
  const [limit, setLimit] = useState(getParam("_limit") ? Number(getParam("_limit")) : 10);
  const [showInput, setShowInput] = useState(false);
  const pagesCount = Math.ceil(totalCount / limit);

  const inputRef = useRef<HTMLInputElement>(null);

  const pages = generateButtons(page, Math.ceil(totalCount / limit));

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const onPrevPageClick = () => {
    page > 1 && setPage(page - 1);
    page > 1 && setParam("_page", page - 1);
  };
  const onNextPageClick = () => {
    page < pagesCount && setPage(page + 1);
    page < pagesCount && setParam("_page", page + 1);
  };
  const onCustomPageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputPage = inputRef.current?.value;
    if (inputPage) {
      setPage(parseInt(inputPage));
      setParam("_page", inputPage);
    }
    setShowInput(false);
  };

  const onLimitChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(value));
    setParam("_limit", value);
  };

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
                onClick={() => {
                  setPage(button);
                  setParam("_page", button);
                }}
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
          <input ref={inputRef} className={s.formInput} type="number" min={1} max={pagesCount} defaultValue={page} />
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
