import { useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./DetailsPage.module.scss";
import Container from "../../components/UI/Container";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getRelatedId, getRelatedTable } from "./types";
import mainApi from "../../api/api";
import { UserType, AlbumType, PostType } from "../EditPage/types";
import DetailsRowData from "./DetailsRowData";

const DetailsPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);

  const [data, setData] = useState<any>(null);
  const [relatedData, setRelatedData] = useState<UserType | AlbumType | PostType>();
  const [relatedPath, setRelatedPath] = useState<string>("");

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mainApi
      .get(table + "/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => setIsError(true))
      .finally(() => {
        table == "users" && setIsLoading(false);
      });
  }, [id, table]);

  useEffect(() => {
    if (!data) return;

    const relatedTable = getRelatedTable(table);
    const relatedId = getRelatedId(table, data);

    if (relatedTable && relatedId) {
      mainApi
        .get(relatedTable + "/" + relatedId)
        .then((response) => {
          setRelatedPath("/" + relatedTable + "/" + relatedId);
          setRelatedData(response.data);
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, [data]);

  return (
    <Container className={s.container}>
      <TopPanel table={table} pageType="details" id={id} />
      {isError ? (
        <p>Произошла ошибка при загрузке данных</p>
      ) : isLoading ? (
        <LoadingSpinner />
      ) : (
        <DetailsRowData table={table} data={data} relatedData={relatedData} relatedPath={relatedPath} />
      )}
    </Container>
  );
};

export default DetailsPage;
