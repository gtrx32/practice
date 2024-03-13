import main from "@assets/images/menu/mainItem.svg";
import users from "@assets/images/menu/usersItem.svg";
import todos from "@assets/images/menu/todosItem.svg";
import photos from "@assets/images/menu/photosItem.svg";
import blog from "@assets/images/menu/blogItem.svg";

export type LinkType = {
  href: string;
  text: string;
  image: string;
  submenu?: SubLinkType[];
};

export type SubLinkType = {
  subHref: string;
  subText: string;
};

export const LINKS: LinkType[] = [
  { href: "/", text: "Главная", image: main },
  { href: "/users", text: "Пользователи", image: users },
  { href: "/todos", text: "Задания", image: todos },
  {
    href: "/",
    text: "Графика",
    image: photos,
    submenu: [
      { subHref: "/photos", subText: "Картинки" },
      { subHref: "/albums", subText: "Альбомы" },
    ],
  },
  {
    href: "/",
    text: "Блог",
    image: blog,
    submenu: [
      { subHref: "/posts", subText: "Посты" },
      { subHref: "/comments", subText: "Комментарии" },
    ],
  },
];
