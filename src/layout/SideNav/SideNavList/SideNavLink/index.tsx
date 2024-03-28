import { useState } from "react";
import s from "./SideNavLink.module.scss";
import { LinkType } from "../../types";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { SubMenuArrowIcon } from "../../../../assets/images/icons";

interface SideNavLinkProps extends LinkType {}

const SideNavLink: React.FC<SideNavLinkProps> = ({ href, text, ButtonIcon, submenu }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const handleDropdownClick = () => setDropdownIsOpen(!dropdownIsOpen);

  const { pathname } = useLocation();

  return (
    <li className={s.listItem} key={text}>
      {submenu ? (
        <>
          <button
            className={clsx(
              s.link,
              s.subMenuButton,
              href
                .split("/")
                .filter((segment) => segment)
                .some((segment) => pathname.includes(segment)) && s.active
            )}
            onClick={handleDropdownClick}
          >
            <ButtonIcon className={s.icon} />
            {text}
            <SubMenuArrowIcon className={clsx(s.arrow, !dropdownIsOpen && s.arrowClose)} />
          </button>
          <ul className={clsx(s.subMenu, dropdownIsOpen && s.subMenuOpened)}>
            {submenu.map(({ subHref, subText }) => (
              <li key={subText}>
                <Link to={subHref} className={clsx(s.subLink, pathname.startsWith(subHref) && s.active)}>
                  {subText}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Link
          to={href}
          className={clsx(
            s.link,
            ((pathname === "/" && href === "/") || (pathname !== "/" && href !== "/" && pathname.startsWith(href))) &&
              s.active
          )}
        >
          <ButtonIcon className={s.icon} />
          {text}
        </Link>
      )}
    </li>
  );
};

export default SideNavLink;
