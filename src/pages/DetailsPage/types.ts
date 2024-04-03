export function getRelatedId(resourceName: string, data: DataType): string | undefined {
  switch (resourceName) {
    case "todos":
      return isTodoType(data) ? data.userId?.toString() : undefined;
    case "albums":
      return isAlbumType(data) ? data.userId?.toString() : undefined;
    case "posts":
      return isPostType(data) ? data.userId?.toString() : undefined;
    case "photos":
      return isPhotoType(data) ? data.albumId?.toString() : undefined;
    case "comments":
      return isCommentType(data) ? data.postId?.toString() : undefined;
    default:
      return undefined;
  }
}

function isTodoType(data: DataType): data is TodoType {
  return "userId" in data && (data as TodoType).userId !== undefined;
}

function isAlbumType(data: DataType): data is AlbumType {
  return "userId" in data && (data as AlbumType).userId !== undefined;
}

function isPostType(data: DataType): data is PostType {
  return "userId" in data && (data as PostType).userId !== undefined;
}

function isPhotoType(data: DataType): data is PhotoType {
  return "albumId" in data && (data as PhotoType).albumId !== undefined;
}

function isCommentType(data: DataType): data is CommentType {
  return "postId" in data && (data as CommentType).postId !== undefined;
}
