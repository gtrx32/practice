import { useState } from "react";
import s from "./SideNavLink.module.scss";
import { LinkType } from "../types";
import arrow from "../../../../assets/sidemenu/arrow.svg";
import clsx from "clsx";

interface SideNavLinkProps extends LinkType {}

const SideNavLink: React.FC<SideNavLinkProps> = ({ href, text, image, submenu }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <li className={s.listItem} key={text}>
      {submenu ? (
        <>
          <button className={clsx(s.link, s.subMenuButton)} type="button" onClick={handleDropdownClick}>
            <img className={s.icon} src={image} alt="" />
            {text}
            {dropdownIsOpen ? <img className={s.arrowClose} src={arrow} alt="" /> : <img src={arrow} alt="" />}
          </button>
          {dropdownIsOpen && (
            <ul className={s.subMenu}>
              {submenu.map(({ subHref, subText }) => (
                <li key={subText}>
                  <a className={s.subLink} href={subHref}>
                    {subText}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <a className={s.link} href={href}>
          <img className={s.icon} src={image} alt="" />
          {text}
        </a>
      )}
    </li>
  );
};

export default SideNavLink;
