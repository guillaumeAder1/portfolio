import React from 'react';
import Searchbar from './searchbar';
import ProjectList from './projectList';

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Searchbar />
        <ProjectList />
      </div>
    );
  }
}

export default Work;
