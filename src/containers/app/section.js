import React from 'react';
import Home from '../home';
import Education from '../education';
import Work from '../works';
import Gallery from '../gallery';
import Footer from './footer';
import { Route } from 'react-router-dom';

const Section = () => (
  <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/education" component={Education} />
    <Route exact path="/works" component={Work} />
    <Route exact path="/gallery" component={Gallery} />
    <Footer />
  </React.Fragment>
);

export default Section;
