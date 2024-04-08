import { useContext } from "react";
import { Option } from "react-multi-select-component";
import ResourceNameContext from "../context/ResourceNameContext";

interface useFilteredDataTableProps {
  data: DataType[];
  selectedFilters: Option[];
}

export const useFilteredDataTable = ({ data, selectedFilters }: useFilteredDataTableProps) => {
  const resourceName = useContext(ResourceNameContext);

  return selectedFilters.length > 0 && resourceName !== "users"
    ? data.filter((item) => selectedFilters.some((option) => AreEqual(resourceName, item, option)))
    : data;
};

const AreEqual = (resourceName: string, item: any, option: Option): boolean => {
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