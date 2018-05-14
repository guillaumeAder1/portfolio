import React from 'react';

const Main = props => {
  return (
    <React.Fragment>
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Gallery</h2>
          </header>
          {/* child is slideshow */}
          {props.children}
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
            urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula
            tate urna.
          </p>
          <ul className="actions">
            <li onClick={() => props.doScroll()}>
              <a className="button icon fa-code">Web</a>
            </li>
            <li>
              <a className="button icon fa-github"> Github</a>
            </li>
            <li>
              <a className="button icon fa-pencil"> Graphic Design</a>
            </li>
            <li>
              <a className="button icon fa-folder">all</a>
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main;
