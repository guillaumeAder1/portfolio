import React, { Component } from 'react';
import Loader from '../hoc/loader.js';
import Slideshow from './slideshow';
import style from '../app/constant';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
    }, 1000);
  }

  render() {
    if (!this.state.ready) {
      return <Loader />;
    } else {
      return (
        <div id="main" style={{ backgroundColor: style.mainBg }}>
          <section id="one">
            <div className="inner">
              <header className="major">
                <h2>Gallery Works</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
                Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
                libero. Nullam et orci eu lorem consequat tincidunt vivamus et
                sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                ligula tate urna.
              </p>
              <ul class="actions">
                <li>
                  <a href="#" class="button icon fa-code">
                    Web
                  </a>
                </li>
                <li>
                  <a href="#" class="button icon fa-github">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" class="button icon fa-pencil">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="#" class="button icon fa-folder">
                    all
                  </a>
                </li>
              </ul>

              <Slideshow>
                <img src="../img/programing.jpg" />
                <img src="../img/camera.jpg" />
                <img src="../img/typo.jpg" />
                <img src="../img/typo2.jpg" />
              </Slideshow>
            </div>
          </section>

          <section id="two" className="spotlights">
            <section style={{ backgroundColor: style.secBg }}>
              <a href="generic.html" className="image">
                <img
                  src="images/pic08.jpg"
                  alt=""
                  data-position="center center"
                />
              </a>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Orci maecenas</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="generic.html" className="button">
                        Learn more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section style={{ backgroundColor: style.mainBg }}>
              <a href="generic.html" className="image">
                <img src="images/pic09.jpg" alt="" data-position="top center" />
              </a>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Rhoncus magna</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="generic.html" className="button">
                        Learn more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section style={{ backgroundColor: style.secBg }}>
              <a href="generic.html" className="image">
                <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
              </a>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Sed nunc ligula</h3>
                  </header>
                  <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et
                    sagittis magna sed nunc rhoncus condimentum sem. In
                    efficitur ligula tate urna. Maecenas massa sed magna lacinia
                    magna pellentesque lorem ipsum dolor. Nullam et orci eu
                    lorem consequat tincidunt. Vivamus et sagittis tempus.
                  </p>
                  <ul className="actions">
                    <li>
                      <a href="generic.html" className="button">
                        Learn more
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      );
    }
  }
}

export default Gallery;
