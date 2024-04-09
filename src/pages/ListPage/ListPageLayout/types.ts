export const getFilters = (resourceName: string, data: RelatedDataType[]): SelectOption[] => {
  if (Array.isArray(data))
    if (resourceName === "todos" || resourceName === "albums" || resourceName === "posts") {
      return (data as UserType[])?.map((item) => ({ value: item.id, label: item.name }));
    } else if (resourceName === "photos") {
      return (data as AlbumType[])?.map((item) => ({ value: item.id, label: item.title }));
    } else if (resourceName === "comments") {
      return (data as PostType[])?.map((item) => ({ value: item.id, label: item.title }));
    }
  return [];
};

export enum SelectPlaceholders {
  todos = "Автор",
  albums = "Владелец",
  posts = "Автор",
  photos = "Альбом",
  comments = "Пост",
}
