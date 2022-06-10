import React from 'react';
import logo from '../images/logo.png';
import { AttachMoney, Home, Newspaper } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation().pathname;

  return (
    <div className="md:h-full w-full">
      <div className="flex flex-col items-center md:h-full md:w-72 bg-gray-900 text-white">
        <Logo />
        <SidebarLinks location={location} />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center md:items-start w-fit pt-4 space-x-2 pr-3 cursor-pointer">
        <img src={logo} alt="logo" className="w-8" />
        <div className="text-xl font-medium">Crypto Dashboard</div>
      </div>
    </Link>
  );
};

const SidebarLinks = ({ location }) => {
  return (
    <div className="flex md:flex-col flex-wrap justify-center md:space-x-0 w-full mt-2 py-2 mx-2">
      <SidebarLink
        name="Home"
        selected={location === '/'}
        icon={<Home fontSize="small" />}
      />
      <SidebarLink
        name="Cryptocurrencies"
        selected={location === '/crypto'}
        icon={<AttachMoney fontSize="small" />}
      />
      <SidebarLink
        name="News"
        selected={location === '/news'}
        icon={<Newspaper fontSize="small" />}
      />
    </div>
  );
};

const SidebarLink = ({ name, selected, icon }) => {
  const Style = selected ? `${CommonStyle} bg-gray-800` : `${CommonStyle}`;

  return (
    <Link to={`/${getPath(name)}`}>
      <div className={Style}>
        {icon}
        <div>{name}</div>
      </div>
    </Link>
  );
};

const CommonStyle =
  'flex items-center md:w-full space-x-2 md:space-x-4 md:pl-8 px-2 md:px-0 py-2 md:py-3 cursor-pointer hover:bg-gray-800 text-sm';

const getPath = (name) => {
  return name === 'Home' ? '' : name === 'News' ? 'news' : 'crypto';
};

export default Sidebar;
