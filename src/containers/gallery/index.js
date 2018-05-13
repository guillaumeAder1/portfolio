import React, { Component } from 'react';
import Loader from '../hoc/loader.js';
import Slideshow from './slideshow';

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
                <h2>Gallery</h2>
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

              <Slideshow>
                <img src="../img/programing.jpg" />
                <img src="../img/photoshop.jpg" />
                <img src="../img/programing.jpg" />
                <img src="../img/photoshop.jpg" />
              </Slideshow>
              {/* <div classNameNameName="image main">
                <span classNameNameName="gallery-img" />
              </div> */}
            </div>
          </section>
          <section id="two" className="spotlights">
            <section>
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
            <section>
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
            <section>
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
