import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { red500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: red500
  },
  tabs: {
    height: 50
  }
});

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab label="School" value="a">
            <div>
              <h2 style={styles.headline}>Controllable Tab A</h2>
              <p>
                Tabs are also controllable if you want to programmatically pass
                them their values. This allows for more functionality in Tabs
                such as not having any Tab selected or assigning them different
                values.
              </p>
            </div>
          </Tab>
          <Tab label="College" value="b">
            <div>
              <h2 style={styles.headline}>Controllable Tab B</h2>
              <p>
                This is another example of a controllable tab. Remember, if you
                use controllable Tabs, you need to give all of your tabs values
                or else you wont be able to select them.
              </p>
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}
