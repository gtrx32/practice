import { TodoType, AlbumType, PostType, PhotoType, CommentType } from "../EditPage/types";

type table = TodoType | AlbumType | PostType | PhotoType | CommentType;

const tableRelations: Record<string, string> = {
  todos: "users",
  albums: "users",
  posts: "users",
  photos: "albums",
  comments: "posts",
};

export function getRelatedTable(table: string): string {
  return tableRelations[table] || "";
}

export function getRelatedId(table: string, data: table): string | undefined {
  switch (table) {
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

function isTodoType(data: table): data is TodoType {
  return "userId" in data && (data as TodoType).userId !== undefined;
}

function isAlbumType(data: table): data is AlbumType {
  return "userId" in data && (data as AlbumType).userId !== undefined;
}

function isPostType(data: table): data is PostType {
  return "userId" in data && (data as PostType).userId !== undefined;
}

function isPhotoType(data: table): data is PhotoType {
  return "albumId" in data && (data as PhotoType).albumId !== undefined;
}

function isCommentType(data: table): data is CommentType {
  return "postId" in data && (data as CommentType).postId !== undefined;
}
