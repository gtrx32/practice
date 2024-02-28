import main from "../../../assets/sidemenu/mainItem.svg";
import users from "../../../assets/sidemenu/usersItem.svg";
import todos from "../../../assets/sidemenu/todosItem.svg";
import photos from "../../../assets/sidemenu/photosItem.svg";
import albums from "../../../assets/sidemenu/albumsItem.svg";
import blog from "../../../assets/sidemenu/blogItem.svg";

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
  {
    href: "/",
    text: "Главная",
    image: main,
  },
  {
    href: "/",
    text: "Пользователи",
    image: users,
  },
  {
    href: "/",
    text: "Задания",
    image: todos,
  },
  {
    href: "/",
    text: "Картинки",
    image: photos,
  },
  {
    href: "/",
    text: "Альбомы",
    image: albums,
  },
  {
    href: "/",
    text: "Блог",
    image: blog,
    submenu: [
      {
        subHref: "/",
        subText: "Посты",
      },
      {
        subHref: "/",
        subText: "Комментарии",
      },
    ],
  },
];
