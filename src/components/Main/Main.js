import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import AnimalList from '../Animal/AnimalList';
import AnimalSingle from '../Animal/AnimalSingle';

const Main = () => {
  const match = useRouteMatch();

  return (
    <main>
      <Route exact path={`${match.path}`} component={AnimalList} />
      <Route exact path={`${match.path}:id`} component={AnimalSingle} />
    </main>
  );
};

export default Main;
