import { Link, useRouteMatch } from 'react-router-dom';
import React from 'react';

const AnimalCard = ({ id, name, aclass, img, desc, link }) => {
  const match = useRouteMatch();
  return (
    <div className='post'>
      <img src={img} alt='animal' />
      <h2>{name}</h2>
      <p>{desc.slice(0, 50)}...</p>
      <Link to={`${match.url}${id}`}>Read more</Link>
    </div>
  );
};

export default AnimalCard;
