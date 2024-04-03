const tableRelations: Record<string, string> = {
  todos: "users",
  albums: "users",
  posts: "users",
  photos: "albums",
  comments: "posts",
};

const getRelatedTable = (resourceName: string): string => {
  return tableRelations[resourceName] || "";
};

export default getRelatedTable;
