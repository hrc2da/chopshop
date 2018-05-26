import React from 'react';
import Paper from '@material-ui/core/Paper';
import GaCarContainer from '../containers/GaCarContainer';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CarInfoContainer from '../containers/CarInfoContainer';

function TabContainer(props) {
    return (
          <Typography component="div" style={{ padding: 8 * 3 }}>
              {props.children}
          </Typography>
          );
}
class Viewspace extends React.Component {
  state = {
    tabValue: 0,
  };
  handleChange = (event, value) => {
    console.log("changing the tab",value);
    this.setState({"tabValue":value});
  };
  render () {
    const { tabValue } = this.state;
    return(
	    <Paper>
        <Tabs value={tabValue} onChange ={this.handleChange} scrollable scrollButtons="auto">
          <Tab label="Current Car" />
          <Tab label="Car Results" />
          <Tab label="Computer-Generated Cars" />
        </Tabs>
        {tabValue === 0 && <TabContainer><CarInfoContainer /></TabContainer>}
        {tabValue === 1 && <TabContainer><GaCarContainer/></TabContainer>}
        {tabValue === 2 && <TabContainer>Cars by the Computer</TabContainer>}
	    </Paper>)
    }
}

export default Viewspace;


