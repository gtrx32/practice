import main from "../../../assets/menu/mainItem.svg";
import users from "../../../assets/menu/usersItem.svg";
import todos from "../../../assets/menu/todosItem.svg";
import photos from "../../../assets/menu/photosItem.svg";
import albums from "../../../assets/menu/albumsItem.svg";
import blog from "../../../assets/menu/blogItem.svg";

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
  { href: "/photos", text: "Картинки", image: photos },
  { href: "/albums", text: "Альбомы", image: albums },
  {
    href: "/",
    text: "Блог",
    image: blog,
    submenu: [
      { subHref: "/posts", subText: "Посты" },
      {
        subHref: "/comments",
        subText: "Комментарии",
      },
    ],
  },
];
