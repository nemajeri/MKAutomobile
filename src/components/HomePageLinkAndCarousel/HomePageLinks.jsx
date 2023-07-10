import React from 'react';
import { Link } from 'react-router-dom';
import { FaCarAlt, FaWallet, FaStar, FaCommentDots } from 'react-icons/fa';

const icons = [FaCarAlt, FaWallet, FaStar, FaCommentDots];

const HomePageLinks = ({ title, index }) => {
  const Icon = icons[index];
  return (
    <div className='mka__shortcut-home-list'>
      <Link to={`${title}`}>
        <i>
          <Icon className={'mka__icon-size'} />
        </i>
      </Link>
      <Link to={`${title}`}>{title.toUpperCase()}</Link>
    </div>
  );
};

export default HomePageLinks;
