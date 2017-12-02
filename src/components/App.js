import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Feed = () => <Header />;
const Profile = () => <h2>Profile</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Feed}></Route>
          <Route path="/profile" component={Profile}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
