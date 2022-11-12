import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ link }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? 'mka__link-active' : 'mka__link-inactive'
      }
      to={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
      end
    >
      {link}
    </NavLink>
  );
};

export default NavbarLink;
