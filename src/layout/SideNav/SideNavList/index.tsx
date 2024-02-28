import Container from "../../../components/UI/Container";
import s from "./SideNavList.module.scss";
import { LINKS } from "./types";
import SideNavLink from "./SideNavLink";

const SideNavList = () => (
  <Container className={s.container}>
    <ul className={s.menuList}>
      {LINKS.map((link) => (
        <SideNavLink {...link} key={link.text} />
      ))}
    </ul>
  </Container>
);

export default SideNavList;
