import { DataTableRowClickEvent } from "primereact/datatable";
import { UserType, AlbumType, PostType, CommentType, PhotoType, TodoType } from "../EditPage/types";
import { Option } from "react-multi-select-component";

export enum Tables {
  users = "Пользователи",
  todos = "Задания",
  photos = "Картинки",
  albums = "Альбомы",
  posts = "Посты",
  comments = "Комментарии",
}

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

export const getFilters = (table: string, data: UserType[] | AlbumType[] | PostType[]): Option[] => {
  if (Array.isArray(data))
    if (table === "todos" || table === "albums" || table === "posts") {
      return (data as UserType[])?.map((item) => ({ value: item.id, label: item.name }));
    } else if (table === "photos") {
      return (data as AlbumType[])?.map((item) => ({ value: item.id, label: item.title }));
    } else if (table === "comments") {
      return (data as PostType[])?.map((item) => ({ value: item.id, label: item.title }));
    }
  return [];
};

export const getItemById = (id: number, data: UserType[] | AlbumType[] | PostType[]) => {
  if (Array.isArray(data)) {
    const dataItem = data.find((item) => item.id === id);
    if (dataItem) {
      if ("name" in dataItem) return (dataItem as UserType).name;
      else if ("title" in dataItem) return (dataItem as AlbumType | PostType).title;
    }
  }
  return "";
};

export const getSelectPlaceholder = (table: string): string => {
  switch (table) {
    case "todos":
      return "Автор";
    case "albums":
      return "Владелец";
    case "posts":
      return "Автор";
    case "photos":
      return "Альбом";
    case "comments":
      return "Пост";
    default:
      return "";
  }
};

export const AreEqual = (table: string, item: any, option: Option): boolean => {
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
};
