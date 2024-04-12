const getRelatedResourceName = (resourceName: string): string => {
  switch (resourceName) {
    case "todos":
      return "users";
    case "albums":
      return "users";
    case "posts":
      return "users";
    case "photos":
      return "albums";
    case "comments":
      return "posts";
    default:
      return "";
  }
};

export default getRelatedResourceName;
