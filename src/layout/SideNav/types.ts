import {
  BlogItemIcon,
  GraphicsItemIcon,
  IconProps,
  MainItemIcon,
  TodosItemIcon,
  UsersItemIcon,
} from "../../assets/images/icons";

type SubLinkType = {
  subHref: string;
  subText: string;
};

export type LinkType = {
  href: string;
  text: string;
  ButtonIcon: React.FC<IconProps>;
  submenu?: SubLinkType[];
};

export const links: LinkType[] = [
  { href: "/", text: "Главная", ButtonIcon: MainItemIcon },
  { href: "/users", text: "Пользователи", ButtonIcon: UsersItemIcon },
  { href: "/todos", text: "Задания", ButtonIcon: TodosItemIcon },
  {
    href: "/photos/albums",
    text: "Графика",
    ButtonIcon: GraphicsItemIcon,
    submenu: [
      { subHref: "/photos", subText: "Картинки" },
      { subHref: "/albums", subText: "Альбомы" },
    ],
  },
  {
    href: "/posts/comments",
    text: "Блог",
    ButtonIcon: BlogItemIcon,
    submenu: [
      { subHref: "/posts", subText: "Посты" },
      { subHref: "/comments", subText: "Комментарии" },
    ],
  },
];
