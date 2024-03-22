import { useState } from "react";
import s from "./SideNavLink.module.scss";
import { LinkType } from "../types";
import submenuArrow from "@assets/images/menu/submenuArrow.svg";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface SideNavLinkProps extends LinkType {}

const SideNavLink: React.FC<SideNavLinkProps> = ({ href, text, image, submenu }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownClick = () => setDropdownIsOpen(!dropdownIsOpen);

  return (
    <li className={s.listItem} key={text}>
      {submenu ? (
        <>
          <button className={clsx(s.link, s.subMenuButton)} onClick={handleDropdownClick}>
            <img className={s.icon} src={image} alt="" />
            {text}
            <img className={clsx(s.arrow, !dropdownIsOpen && s.arrowClose)} src={submenuArrow} alt="" />
          </button>
          <ul className={clsx(s.subMenu, dropdownIsOpen && s.subMenuOpened)}>
            {submenu.map(({ subHref, subText }) => (
              <li key={subText}>
                <Link to={subHref} className={s.subLink}>
                  {subText}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link to={href} className={s.link}>
          <img className={s.icon} src={image} alt="" />
          {text}
        </Link>
      )}
    </li>
  );
};

export default SideNavLink;
