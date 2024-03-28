import { UserType, AlbumType, PostType, CommentType, PhotoType, TodoType } from "../EditPage/types";
import { Option } from "react-multi-select-component";

export type DataType = UserType | TodoType | AlbumType | PhotoType | PostType | CommentType;
export type RelatedDataType = UserType | AlbumType | PostType;

export enum Tables {
  users = "Пользователи",
  todos = "Задания",
  photos = "Картинки",
  albums = "Альбомы",
  posts = "Посты",
  comments = "Комментарии",
}

export const getFilters = (table: string, data: RelatedDataType[]): Option[] => {
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
