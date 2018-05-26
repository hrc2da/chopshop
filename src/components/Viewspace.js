import React from 'react';
import Paper from '@material-ui/core/Paper';
import GaCarContainer from '../containers/GaCarContainer';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CarInfoContainer from '../containers/CarInfoContainer';
import { withStyles } from '@material-ui/core/styles';
import CostBenefitPlot from './CostBenefitPlot';
function TabContainer(props) {
    return (
          <Typography component="div" style={{ padding: 8 * 3 }}>
              {props.children}
          </Typography>
          );
}
const styles = {
  tabbedView: {
      height:450,
      overflow:'auto'
  }

};
class Viewspace extends React.Component {
  state = {
    tabValue: 0,
  };
  handleChange = (event, value) => {
    console.log("changing the tab",value);
    this.setState({"tabValue":value});
  };
  render () {
    const { classes} = this.props;
    const { tabValue } = this.state;
    return(
	    <Paper className={classes.tabbedView}>
        <Tabs value={tabValue} onChange ={this.handleChange} scrollable scrollButtons="auto">
          <Tab label="Car Details" />
          <Tab label="Test Drives" />
          <Tab label="Computer-Generated Cars" />
        </Tabs>
        {tabValue === 0 && <TabContainer><CarInfoContainer /></TabContainer>}
        {tabValue === 1 && <TabContainer><CostBenefitPlot /></TabContainer>}
        {tabValue === 2 && <TabContainer><GaCarContainer /></TabContainer>}
	    </Paper>)
    }
}

export default withStyles(styles)(Viewspace);


