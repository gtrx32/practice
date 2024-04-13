import { useContext } from "react";
import PageContext from "../context/PageContext";

interface useFilteredDataTableProps {
  data: DataType[];
  selectedFilters: SelectOption[];
}

export const useFilteredDataTable = ({ data, selectedFilters }: useFilteredDataTableProps) => {
  const { resourceName } = useContext(PageContext);

  return selectedFilters.length > 0 && resourceName !== "users"
    ? data.filter((item) => selectedFilters.some((option) => AreEqual(resourceName, item, option)))
    : data;
};

const AreEqual = (resourceName: Resources, item: DataType, option: SelectOption): boolean => {
  switch (resourceName) {
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
