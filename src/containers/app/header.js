import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavItem,
  SideNav,
  SideNavItem,
  Button
} from 'react-materialize';

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
        <Navbar brand="logo" right>
          <Link to="/">
            <NavItem onClick={() => console.log('test click')}>
              Getting started
            </NavItem>
          </Link>
          <Link to="/education">
            <NavItem href="components.html">Components</NavItem>
          </Link>
        </Navbar>

        <SideNav
          trigger={<Button>SIDE NAV DEMO</Button>}
          options={{ closeOnClick: true }}>
          <SideNavItem
            userView
            user={{
              background: 'img/bg.png',
              image: 'img/me_thumbnail.jpg',
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
          />
          <SideNavItem href="#!icon" icon="cloud">
            First Link With Icon
          </SideNavItem>
          <SideNavItem href="#!second">Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href="#!third">
            Third Link With Waves
          </SideNavItem>
        </SideNav>

        {/* <AppBar
          title="Guillaume Ader"
          onLeftIconButtonClick={this.toggleDrawer}
        />
        <Drawer open={this.state.open}>
          <Link to="/">
            <MenuItem onClick={this.toggleDrawer}>Home </MenuItem>
          </Link>
          <Link to="/education">
            <MenuItem onClick={this.toggleDrawer}>Education</MenuItem>
          </Link>
          <Link to="/education">
            <MenuItem onClick={this.toggleDrawer}>Education</MenuItem>
          </Link>
          <Link to="/education">
            <MenuItem onClick={this.toggleDrawer}>Education</MenuItem>
          </Link>
          <Link to="/education">
            <MenuItem onClick={this.toggleDrawer}>Education</MenuItem>
          </Link>
        </Drawer> */}
      </div>
    );
  }
}

export default Header;
