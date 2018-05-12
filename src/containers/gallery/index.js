import React, { Component } from 'react';
import Loader from '../hoc/loader.js';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ready: true
      });
    }, 300);
  }

  render() {
    if (!this.state.ready) {
      return <Loader />;
    } else {
      return (
        <div id="main">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Slideshow</h1>
              </header>
              <div className="image main">
                <span className="gallery-img" />
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default Gallery;
