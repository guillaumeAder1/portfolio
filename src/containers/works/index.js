import React from 'react';
import Searchbar from './searchbar';
import ProjectList from './projectList';
import Gallery from './gallery';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true
    };
  }

  selectedChanged = e => {
    this.setState({
      selected: e
    });
  };

  render() {
    return (
      <div>
        <Searchbar callback={e => this.selectedChanged(e)} />
        <Gallery isvisible={this.state.selected} />
        <ProjectList isvisible={!this.state.selected} />
      </div>
    );
  }
}

export default Work;
