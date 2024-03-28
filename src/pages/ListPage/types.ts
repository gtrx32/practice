import { Option } from "react-multi-select-component";

export enum SelectPlaceholders {
  todos = "Автор",
  albums = "Владелец",
  posts = "Автор",
  photos = "Альбом",
  comments = "Пост",
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
