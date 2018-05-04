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
    let isgithub = false;
    if (value === 2) {
      this.props.fetchdata('github');
      isgithub = true;
    }

    this.props.callback(isgithub);
  };

  render() {
    return (
      <Toolbar style={{ marginTop: '150px' }}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Search Projects" />
            <MenuItem value={2} primaryText="Github" />
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchdata }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
