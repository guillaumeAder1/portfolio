import React from 'react';
import Section from './section';
import Header from './header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  grey200,
  grey400,
  grey700,
  grey900,
  grey800,
  fullBlack,
  cyan700
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey800,
    shadowColor: fullBlack,
    accent1Color: cyan700,
    alternateTextColor: grey200
  },
  appBar: {
    height: 50,
    color: grey800
  },
  tabs: {
    backgroundColor: grey400,
    selectedTextColor: grey800
  },
  fontFamily: 'Inconsolata, monospace'
});

(function() {
  // document.querySelector('#root-bg').
  document.body.style.backgroundImage = "url('img/bg.png')";
})();

const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Header />
      <Section />
    </div>
  </MuiThemeProvider>
);

export default Main;
