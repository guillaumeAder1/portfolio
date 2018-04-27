import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Section from './section';
import Header from './header';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
// http://materializecss.com/sidenav.html
const Main = () => (
  <MuiThemeProvider>
    <Header />
    <Section />
    <a className="waves-effect waves-light btn">button</a>
    <a className="waves-effect waves-light btn">
      <i className="material-icons left">cloud</i>button
    </a>
    <a className="waves-effect waves-light btn">
      <i className="material-icons right">cloud</i>button
    </a>
  </MuiThemeProvider>
);

export default Main;
