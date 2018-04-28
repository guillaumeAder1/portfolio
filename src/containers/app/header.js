import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { cyan500 } from 'material-ui/styles/colors';

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
        <div>
          <AppBar
            title="GuillaumeAder.frontendDeveloper();"
            onLeftIconButtonClick={this.toggleDrawer}
            style={{
              fontFamily: 'Inconsolata'
            }}
            titleStyle={{
              color: cyan500
            }}
          />
        </div>
        <div>
          <Drawer width="25%" open={this.state.open}>
            <Link to="/">
              <MenuItem onClick={this.toggleDrawer}>Home </MenuItem>
            </Link>
            <Link to="/education">
              <MenuItem onClick={this.toggleDrawer}>Experience</MenuItem>
            </Link>
            <Link to="/works">
              <MenuItem onClick={this.toggleDrawer}>Works</MenuItem>
            </Link>
            <Link to="/education">
              <MenuItem onClick={this.toggleDrawer}>Education</MenuItem>
            </Link>
            <Link to="/education">
              <MenuItem onClick={this.toggleDrawer}>Contact</MenuItem>
            </Link>
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Header;
