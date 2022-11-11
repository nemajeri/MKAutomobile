import React from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { FaCarAlt, FaWallet, FaStar, FaCommentDots } from 'react-icons/fa';

const icons = [FaCarAlt, FaWallet, FaStar, FaCommentDots];

const HomePageLinks = ({ title, index }) => {
  const Icon = icons[index];
  return (
    <div className='mka__shortcut-home-list'>
      <IconContext.Provider
        value={{
          className: 'mka__icon-size',
        }}
      >
        <Link to={`${title}`}>
          <i>
            <Icon />
          </i>
        </Link>
      </IconContext.Provider>
      <Link to={`${title}`}>{title.toUpperCase()}</Link>
    </div>
  );
};

export default HomePageLinks;
