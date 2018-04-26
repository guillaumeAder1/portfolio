import React from 'react';
import Home from '../home';
import Education from '../education';
import { Route } from 'react-router-dom';

const Section = () => (
  <main className="center">
    <Route exact path="/" component={Home} />
    <Route exact path="/education" component={Education} />
  </main>
);

export default Section;
