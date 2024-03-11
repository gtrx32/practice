import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./DetailsPage.module.scss";
import Container from "../../components/UI/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { DataRow, Show } from "./types";
import done from "@assets/images/details/done.svg";
import notDone from "@assets/images/details/notDone.svg";

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

    axios
      .get("https://jsonplaceholder.typicode.com/" + table + "/" + id)
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
            {fieldsToShow.map((field: DataRow) => (
              <div key={field.name} className={s.row}>
                <div className={s.rowTitle}>{field.label}: </div>
                <div className={s.rowData}>
                  {field.name === "url" || field.name === "thumbnailUrl" ? (
                    <img src={data[field.name]} className={s.image} />
                  ) : field.name === "completed" ? (
                    <img src={data[field.name] ? done : notDone} className={s.readyIcon} />
                  ) : field.sub ? (
                    field.sub.map((subField: any, index: number) => (
                      <span key={subField.name}>
                        {index > 0 && ", "}
                        {data[field.name][subField.name]}
                      </span>
                    ))
                  ) : (
                    data[field.name]
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
