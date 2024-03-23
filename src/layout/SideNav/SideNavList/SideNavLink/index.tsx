import { useState } from "react";
import s from "./SideNavLink.module.scss";
import { LinkType } from "../types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SubMenuArrowIcon } from "../../../../assets/images/icons";

interface SideNavLinkProps extends LinkType {}

const SideNavLink: React.FC<SideNavLinkProps> = ({ href, text, ButtonIcon, submenu }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownClick = () => setDropdownIsOpen(!dropdownIsOpen);

  return (
    <li className={s.listItem} key={text}>
      {submenu ? (
        <>
          <button className={clsx(s.link, s.subMenuButton)} onClick={handleDropdownClick}>
            <ButtonIcon className={s.icon} />
            {text}
            <SubMenuArrowIcon className={clsx(s.arrow, !dropdownIsOpen && s.arrowClose)} />
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
          <ButtonIcon className={s.icon} />
          {text}
        </Link>
      )}
    </li>
  );
};

export default SideNavLink;
