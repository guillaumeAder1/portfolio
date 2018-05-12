import React from 'react';
import Home from '../home';
import Education from '../education';
import Work from '../works';
import Gallery from '../gallery';
import { Route } from 'react-router-dom';

const Section = () => (
  <div className="">
    <Route exact path="/" component={Home} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/works" component={Work} />
    <Route exact path="/gallery" component={Gallery} />
  </div>
);

export default Section;
