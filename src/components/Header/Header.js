import React from 'react';
import { Link } from 'react-router-dom';
import Weather from './Weather';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>Business College Helsinki</Link>
      </h1>
      <Link to='/new' className='create-button'>
        +
      </Link>
      <Weather />
    </header>
  );
};

export default Header;
