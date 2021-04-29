import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Main from './components/Main/Main';
import AnimalNew from './components/Animal/AnimalNew';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/new' component={AnimalNew} />
        <Route path='/' component={Main} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
