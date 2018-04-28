import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchdata } from '../../modules/github';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event, index, value) => {};

  render() {
    const projects = this.props.projects;
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Project Name</TableHeaderColumn>
            <TableHeaderColumn>Latest Update</TableHeaderColumn>
            <TableHeaderColumn>Language</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((item, index) => {
            let date = new Date(item.pushed_at);
            return (
              <TableRow key={index}>
                <TableRowColumn>{item.name}</TableRowColumn>
                <TableRowColumn>{date.toDateString()}</TableRowColumn>
                <TableRowColumn>{item.language}</TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

// export default Searchbar

const mapStateToProps = state => ({
  projects: state.github.projects
});

export default connect(mapStateToProps)(ProjectList);
