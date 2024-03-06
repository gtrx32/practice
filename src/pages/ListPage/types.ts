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
    { field: "id", header: "ID", width: "70px" },
    { field: "name", header: "Имя", width: "190px" },
    { field: "username", header: "Никнейм", width: "190px" },
    { field: "email", header: "E-mail", width: "260px" },
    { field: "phone", header: "Телефон", width: "190px" },
  ],
  todos: [
    { field: "id", header: "ID", width: "70px" },
    { field: "userId", header: "Автор", width: "250px" },
    { field: "title", header: "Текст", width: "450px" },
    { field: "completed", header: "Выполнена", width: "140px" },
  ],
  photos: [
    { field: "id", header: "ID", width: "70px" },
    { field: "thumbnailUrl", header: "Превью", width: "150px" },
    { field: "title", header: "Заголовок", width: "340px" },
    { field: "albumId", header: "Альбом", width: "360px" },
  ],
  albums: [
    { field: "id", header: "ID", width: "70px" },
    { field: "userId", header: "Владелец", width: "310px" },
    { field: "title", header: "Название", width: "530px" },
  ],
  posts: [
    { field: "id", header: "ID", width: "70px" },
    { field: "userId", header: "Автор", width: "250px" },
    { field: "title", header: "Заголовок", width: "600px" },
  ],
  comments: [
    { field: "id", header: "ID", width: "70px" },
    { field: "postId", header: "Пост", width: "310px" },
    { field: "email", header: "E-mail автора", width: "215px" },
    { field: "body", header: "Текст комментария", width: "330px" },
  ],
};
