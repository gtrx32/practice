import { Link, useLocation } from "react-router-dom";
import TopPanel from "../../components/TopPanel";
import s from "./DetailsPage.module.scss";
import Container from "../../components/UI/Container";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import { DataRow, Show } from "./types";
import done from "@assets/images/details/done.svg";
import notDone from "@assets/images/details/notDone.svg";
import mainApi from "../../api/api";
import { UserType, AlbumType, PostType, TodoType, PhotoType, CommentType } from "../EditPage/types";

const DetailsPage = () => {
  const location = useLocation();
  const { pathname } = location;
  const [table, id] = pathname.split("/").slice(1);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [subData, setSubData] = useState<UserType | AlbumType | PostType>();
  const [path, setPath] = useState<string>("");

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
    if (data) {
      let subtable: string =
        ((table === "todos" || table === "albums" || table === "posts") && "users") ||
        (table === "photos" && "albums") ||
        (table === "comments" && "posts") ||
        "";

      let subId: string | undefined;

      if (data) {
        if (table === "todos") {
          subId = (data as TodoType).userId?.toString();
        } else if (table === "albums") {
          subId = (data as AlbumType).userId?.toString();
        } else if (table === "posts") {
          subId = (data as PostType).userId?.toString();
        } else if (table === "photos") {
          subId = (data as PhotoType).albumId?.toString();
        } else if (table === "comments") {
          subId = (data as CommentType).postId?.toString();
        }
      }

      if (subtable && subId) {
        mainApi
          .get(subtable + "/" + subId)
          .then((response) => {
            setPath("/" + subtable + "/" + subId);
            setSubData(response.data);
          })
          .catch(() => setIsError(true))
          .finally(() => setIsLoading(false));
      }
    }
  }, [data]);

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
                  {name === "userId" || name === "albumId" || name === "postId" ? (
                    <Link to={path} className={s.link}>
                      {(name === "userId" && (subData as UserType).name) ||
                        (name === "albumId" && (subData as AlbumType).title) ||
                        (name === "postId" && (subData as PostType).title)}
                    </Link>
                  ) : name === "url" || name === "thumbnailUrl" ? (
                    <img src={data[name]} className={s.image} />
                  ) : name === "completed" ? (
                    <img src={data[name] ? done : notDone} className={s.readyIcon} />
                  ) : sub ? (
                    sub.map((subField: any, index: number) => (
                      <span key={subField.name}>
                        {index > 0 && ", "}
                        {data[name]?.[subField?.name]}
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
