const getFilterName = (resourceName: Resources) => {
  switch (resourceName) {
    case "todos":
    case "albums":
    case "posts":
      return "userId";
    case "photos":
      return "albumId";
    case "comments":
      return "postId";
    default:
      return "";
  }
};

export default getFilterName;
