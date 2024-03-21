export type DataRow = {
  name: string;
  label: string;
  sub?: DataRow[];
};

export const Show: Record<string, DataRow[]> = {
  users: [
    { name: "id", label: "id" },
    { name: "name", label: "ФИО" },
    { name: "username", label: "Никнейм" },
    { name: "email", label: "E-mail" },
    { name: "phone", label: "Телефон" },
    {
      name: "address",
      label: "Адрес",
      sub: [
        { name: "suite", label: "Дом, квартира" },
        { name: "street", label: "Улица" },
        { name: "city", label: "Город" },
      ],
    },
    {
      name: "company",
      label: "Название компании",
      sub: [{ name: "name", label: "Название" }],
    },
    { name: "website", label: "Веб-сайт" },
  ],
  todos: [
    { name: "id", label: "id" },
    { name: "userId", label: "Автор" },
    { name: "title", label: "Текст" },
    { name: "completed", label: "Выполнена" },
  ],
  photos: [
    { name: "id", label: "id" },
    { name: "title", label: "Название" },
    { name: "albumId", label: "Альбом" },
    { name: "thumbnailUrl", label: "Превью" },
    { name: "url", label: "Изображение" },
  ],
  albums: [
    { name: "id", label: "id" },
    { name: "userId", label: "Владелец" },
    { name: "title", label: "Название" },
  ],
  posts: [
    { name: "id", label: "id" },
    { name: "userId", label: "Автор" },
    { name: "title", label: "Заголовок" },
    { name: "body", label: "Текст" },
  ],
  comments: [
    { name: "id", label: "id" },
    { name: "postId", label: "Пост" },
    { name: "email", label: "Email автора" },
    { name: "body", label: "Текст комментария" },
  ],
};
