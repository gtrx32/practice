import { DataTableRowClickEvent } from "primereact/datatable";
import { UserType, AlbumType, PostType } from "../../../EditPage/types";
import { RelatedDataType } from "../../types";

export const Columns = {
  users: [
    { field: "id", header: "ID", width: "70px" },
    { field: "name", header: "Имя", width: "190px" },
    { field: "username", header: "Никнейм", width: "190px" },
    { field: "email", header: "E-mail", width: "260px" },
    { field: "phone", header: "Телефон", width: "190px" },
    { field: "actions", header: "Действия", width: "90px" },
  ],
  todos: [
    { field: "id", header: "ID", width: "70px" },
    { field: "userId", header: "Автор", width: "250px" },
    { field: "title", header: "Текст", width: "450px" },
    { field: "completed", header: "Выполнена", width: "140px" },
    { field: "actions", header: "Действия", width: "90px" },
  ],
  photos: [
    { field: "id", header: "ID", width: "70px" },
    { field: "thumbnailUrl", header: "Превью", width: "100px" },
    { field: "title", header: "Заголовок", width: "340px" },
    { field: "albumId", header: "Альбом", width: "360px" },
    { field: "actions", header: "Действия", width: "90px" },
  ],
  albums: [
    { field: "id", header: "ID", width: "70px" },
    { field: "userId", header: "Владелец", width: "310px" },
    { field: "title", header: "Название", width: "530px" },
    { field: "actions", header: "Действия", width: "90px" },
  ],
  posts: [
    { field: "id", header: "ID", width: "70px" },
    { field: "userId", header: "Автор", width: "250px" },
    { field: "title", header: "Заголовок", width: "600px" },
    { field: "actions", header: "Действия", width: "90px" },
  ],
  comments: [
    { field: "id", header: "ID", width: "70px" },
    { field: "postId", header: "Пост", width: "280px" },
    { field: "email", header: "E-mail автора", width: "215px" },
    { field: "body", header: "Текст комментария", width: "330px" },
    { field: "actions", header: "Действия", width: "90px" },
  ],
};

export const getDetailsPagePath = (table: string, { data }: DataTableRowClickEvent): string => {
  const { id } = data as { id: number };
  return `/${table}/${id}`;
};

export const getItemById = (id: number, data: RelatedDataType[]) => {
  if (Array.isArray(data)) {
    const dataItem = data.find((item) => item.id === id);
    if (dataItem) {
      if ("name" in dataItem) return (dataItem as UserType).name;
      else if ("title" in dataItem) return (dataItem as AlbumType | PostType).title;
    }
  }
  return "";
};
