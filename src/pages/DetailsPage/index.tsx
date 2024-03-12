import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./DetailsPage.module.scss";
import Container from "../../components/UI/Container";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { DataRow, Show } from "./types";
import done from "@assets/images/details/done.svg";
import notDone from "@assets/images/details/notDone.svg";
import mainApi from "../../api/api";

interface DetailsPageProps {}

const DetailsPage: React.FC<DetailsPageProps> = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .get(table + "/" + id)
      .then(({ data }) => setData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [id, table]);

  const fieldsToShow = Show[table as keyof typeof Show];

  return (
    <Container className={s.container}>
      <TopPanel dataType={table} pageType="details" id={id} />
      {!isError ? (
        !isLoading ? (
          <div className={s.wrapper}>
            {fieldsToShow.map(({ name, label, sub }: DataRow) => (
              <div key={name} className={s.row}>
                <div className={s.rowTitle}>{label}: </div>
                <div className={s.rowData}>
                  {name === "url" || name === "thumbnailUrl" ? (
                    <img src={data[name]} className={s.image} />
                  ) : name === "completed" ? (
                    <img src={data[name] ? done : notDone} className={s.readyIcon} />
                  ) : sub ? (
                    sub.map((subField: any, index: number) => (
                      <span key={subField.name}>
                        {index > 0 && ", "}
                        {data[name][subField.name]}
                      </span>
                    ))
                  ) : (
                    data[name]
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <p>Произошла ошибка при загрузке данных</p>
      )}
    </Container>
  );
};

export default DetailsPage;
