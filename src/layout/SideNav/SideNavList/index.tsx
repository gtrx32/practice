import Container from "../../../components/UI/Container";
import s from "./SideNavList.module.scss";
import { LINKS } from "./types";
import SideNavLink from "./SideNavLink";
import clsx from "clsx";

interface SideNavListProps {
  className?: string;
}

const SideNavList: React.FC<SideNavListProps> = ({ className }) => (
  <Container className={clsx(s.container, className)}>
    <ul className={s.menuList}>
      {LINKS.map((link) => (
        <SideNavLink {...link} key={link.text} />
      ))}
    </ul>
  </Container>
);

export default SideNavList;
