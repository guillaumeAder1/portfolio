import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchdata } from '../../modules/github';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  handleChange = (event, index, value) => {
    this.setState({ value });
    if (value === 2) {
      this.props.fetchdata('github');
    }
  };

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Projects" />
            <MenuItem value={2} primaryText="From Github" />
            <MenuItem value={3} primaryText="Web" />
            <MenuItem value={4} primaryText="Graphic Design" />
            <MenuItem value={5} primaryText="Others" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          {/* <ToolbarTitle text="Options" /> */}
          <TextField
            hintText="Type here..."
            floatingLabelText="Search by name"
          />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="Clear All Filter" primary={true} />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }>
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

// export default Searchbar

const mapStateToProps = state => ({
  // count: state.counter.count,
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchdata }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
