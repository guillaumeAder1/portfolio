import React, { Component, Children } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Slideshow extends Component {
  state = {
    total: 0,
    current: 0
  };

  componentDidMount() {
    const { children } = this.props;
    this.setState({ total: Children.count(children) });
    this.interval = setInterval(this.showNext, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  showNext = () => {
    const { total, current } = this.state;
    this.setState({
      current: current + 1 === total ? 0 : current + 1
    });
  };
  render() {
    const images = this.props.children.map((child, i) => {
      const style = {
        backgroundImage: `url('${child.props.src}')`
      };
      return <span key={i} className="gallery-img" style={style} />;
    });
    return (
      <div className="image main">
        {/* {Children.toArray(images)[this.state.current]} */}
        <ReactCSSTransitionGroup
          className="group"
          transitionName="example"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}>
          {Children.toArray(images)[this.state.current]}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Slideshow;
