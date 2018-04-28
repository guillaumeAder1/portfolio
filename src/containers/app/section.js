import React from 'react';
import Home from '../home';
import Education from '../education';
import Work from '../works';
import { Route } from 'react-router-dom';

const Section = () => (
  <main className="center">
    <Route exact path="/" component={Home} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/works" component={Work} />
  </main>
);

export default Section;
