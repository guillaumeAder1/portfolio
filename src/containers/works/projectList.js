import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchdata } from '../../modules/github';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, index, value) => {};

  render() {
    const projects = this.props.projects;
    return (
      <div>
        {this.props.isvisible || (
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Last Update</th>
                  <th>Language</th>
                </tr>
              </thead>
              <tbody>
                {this.props.projects.map((item, index) => {
                  let date = new Date(item.pushed_at);
                  return (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{date.toDateString()}</td>
                      <td>{item.language}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

// export default Searchbar

const mapStateToProps = state => ({
  projects: state.github.projects
});

export default connect(mapStateToProps)(ProjectList);
