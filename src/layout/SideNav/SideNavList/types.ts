import {
  BlogItemIcon,
  GraphicsItemIcon,
  IconProps,
  MainItemIcon,
  TodosItemIcon,
  UsersItemIcon,
} from "../../../assets/images/icons";

export type LinkType = {
  href: string;
  text: string;
  ButtonIcon: React.FC<IconProps>;
  submenu?: SubLinkType[];
};

export type SubLinkType = {
  subHref: string;
  subText: string;
};

export const LINKS: LinkType[] = [
  { href: "/", text: "Главная", ButtonIcon: MainItemIcon },
  { href: "/users", text: "Пользователи", ButtonIcon: UsersItemIcon },
  { href: "/todos", text: "Задания", ButtonIcon: TodosItemIcon },
  {
    href: "/",
    text: "Графика",
    ButtonIcon: GraphicsItemIcon,
    submenu: [
      { subHref: "/photos", subText: "Картинки" },
      { subHref: "/albums", subText: "Альбомы" },
    ],
  },
  {
    href: "/",
    text: "Блог",
    ButtonIcon: BlogItemIcon,
    submenu: [
      { subHref: "/posts", subText: "Посты" },
      { subHref: "/comments", subText: "Комментарии" },
    ],
  },
];
