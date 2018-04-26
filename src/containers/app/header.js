import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

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
        <AppBar
          title="Guillaume Ader"
          onLeftIconButtonClick={this.toggleDrawer}
        />
        <Drawer open={this.state.open}>
          <Link to="/">
            {' '}
            <MenuItem onClick={this.toggleDrawer}>Home </MenuItem>
          </Link>
          <Link to="/education">
            <MenuItem onClick={this.toggleDrawer}>Education</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default Header;
