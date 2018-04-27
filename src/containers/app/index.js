import React from 'react';
import Section from './section';
import Header from './header';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
// http://materializecss.com/sidenav.html
const Main = () => (
  <div>
    <Header />
    <Section />
    <a className="waves-effect blue-grey lighten-4 btn">button</a>
    <a className="waves-effect blue-grey lighten-4 btn">
      <i className="material-icons left">cloud</i>button
    </a>
    <a className="waves-effect blue-grey lighten-4 btn">
      <i className="material-icons right">cloud</i>button
    </a>
  </div>
);

export default Main;
