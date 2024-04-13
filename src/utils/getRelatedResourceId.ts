const getRelatedResourceId = (resourceName: Resources, data: DataType | undefined): number | undefined => {
  if (data) {
    switch (resourceName) {
      case "todos":
        return isTodoType(data) ? data.userId : undefined;
      case "albums":
        return isAlbumType(data) ? data.userId: undefined;
      case "posts":
        return isPostType(data) ? data.userId : undefined;
      case "photos":
        return isPhotoType(data) ? data.albumId : undefined;
      case "comments":
        return isCommentType(data) ? data.postId : undefined;
      default:
        return undefined;
    }
  }
};

export default getRelatedResourceId;

const isTodoType = (data: DataType): data is TodoType => {
  return "userId" in data && (data as TodoType).userId !== undefined;
};

const isAlbumType = (data: DataType): data is AlbumType => {
  return "userId" in data && (data as AlbumType).userId !== undefined;
};

const isPostType = (data: DataType): data is PostType => {
  return "userId" in data && (data as PostType).userId !== undefined;
};

const isPhotoType = (data: DataType): data is PhotoType => {
  return "albumId" in data && (data as PhotoType).albumId !== undefined;
};

const isCommentType = (data: DataType): data is CommentType => {
  return "postId" in data && (data as CommentType).postId !== undefined;
};
