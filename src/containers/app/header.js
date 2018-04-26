import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Home from '../home';
import About from '../about';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  openDrawer(e) {
    alert('ok');
  }

  render() {
    return (
      <div>
        <AppBar
          title="My AppBar"
          onLeftIconButtonClick={e => this.openDrawer()}
        />
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default Header;
