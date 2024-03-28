const tableRelations: Record<string, string> = {
  todos: "users",
  albums: "users",
  posts: "users",
  photos: "albums",
  comments: "posts",
};

const getRelatedTable = (table: string): string => {
  return tableRelations[table] || "";
};

export default getRelatedTable;
