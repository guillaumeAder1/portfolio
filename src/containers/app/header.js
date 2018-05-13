import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.body = document.querySelector('body');
  }

  addclassName = toggle => {
    if (toggle) {
      this.body.classList.add('is-menu-visible');
    } else {
      this.body.classList.remove('is-menu-visible');
    }
  };

  render() {
    return (
      <React.Fragment>
        <header id="header">
          <a href="" className="logo">
            <strong>#portfolio</strong> <span>Guillaume Ader</span>
          </a>
          <nav>
            <a href="#menu" onClick={e => this.addclassName(true)}>
              Menu
            </a>
          </nav>
        </header>

        <nav id="menu">
          <div className="inner">
            <ul className="links">
              <li>
                <Link to="/education" onClick={e => this.addclassName(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/works" onClick={e => this.addclassName(false)}>
                  Works
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={e => this.addclassName(false)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/education" onClick={e => this.addclassName(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/education" onClick={e => this.addclassName(false)}>
                  Home
                </Link>
              </li>
            </ul>
            <ul className="actions vertical">
              <li>
                <a href="#" className="button special fit">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="button fit">
                  Log In
                </a>
              </li>
            </ul>
          </div>
          <a className="close" onClick={e => this.addclassName(false)}>
            Close
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
