import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Home from '../home';
import About from '../about';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDrawer = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div>
        <AppBar title="My AppBar" onLeftIconButtonClick={this.toggleDrawer} />
        <Drawer open={this.state.open}>
          <MenuItem onClick={this.toggleDrawer}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={this.toggleDrawer}>
            <Link to="/about-us">About</Link>
          </MenuItem>
        </Drawer>
        <header>
          <Link to="/" onClick={this.toggleDrawer}>
            Home
          </Link>
          <Link to="/about-us" onClick={this.toggleDrawer}>
            About
          </Link>
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
