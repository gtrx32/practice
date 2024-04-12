export const getItemById = (id: number, data: RelatedDataType[]) => {
  if (Array.isArray(data)) {
    const dataItem = data.find((item) => item?.id === id);
    if (dataItem) {
      if ("name" in dataItem) return (dataItem as UserType).name;
      else if ("title" in dataItem) return (dataItem as AlbumType | PostType).title;
    }
  }
  return "";
};
