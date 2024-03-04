export enum Tables {
  users = "Пользователи",
  todos = "Задания",
  photos = "Картинки",
  albums = "Альбомы",
  posts = "Посты",
  comments = "Комментарии",
}

export const Columns = {
  users: [
    { field: "id", header: "ID" },
    { field: "name", header: "Name" },
    { field: "username", header: "Username" },
    { field: "email", header: "E-mail" },
    { field: "phone", header: "Phone" },
  ],
  todos: [
    { field: "id", header: "ID" },
    { field: "userId", header: "UserId" },
    { field: "title", header: "Title" },
    { field: "completed", header: "IsCompleted" },
  ],
  photos: [
    { field: "id", header: "ID" },
    { field: "thumbnailUrl", header: "Preview" },
    { field: "title", header: "Title" },
    { field: "albumId", header: "Album" },
  ],
  albums: [
    { field: "id", header: "ID" },
    { field: "userId", header: "UserId" },
    { field: "title", header: "Title" },
  ],
  posts: [
    { field: "id", header: "ID" },
    { field: "userId", header: "UserId" },
    { field: "title", header: "Title" },
  ],
  comments: [
    { field: "id", header: "ID" },
    { field: "postId", header: "PostId" },
    { field: "email", header: "E-mail" },
    { field: "body", header: "Body" },
  ],
};
