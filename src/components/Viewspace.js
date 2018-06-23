import React from 'react';
import Paper from '@material-ui/core/Paper';
import GaCarContainer from '../containers/GaCarContainer';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CarInfoContainer from '../containers/CarInfoContainer';
import { withStyles } from '@material-ui/core/styles';
import CostBenefitPlotContainer from '../containers/CostBenefitPlotContainer';
import TestDrivePlayerContainer from '../containers/TestDrivePlayerContainer';
import { TAB_TOP,TAB_BOTTOM } from '../actions/tabs';
function TabContainer(props) {
    return (
          <Typography component="div" style={{ padding: 8 * 3 }}>
              {props.children}
          </Typography>
          );
}
const styles = {
  tabbedView: {
    height: 350,
    overflow:'auto',
    marginBottom: 15
  },
  tab: {
    height:350
  },

  player: {
    height:400,
    width:400,
    margin: 'auto'
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
      <React.Fragment>
	    <Paper className={classes.tabbedView}>
        <Tabs value={this.props.tabValueTop} onChange ={(e,v)=>this.props.handleSwitchTab(e,TAB_TOP,v)} scrollable scrollButtons="auto">
          <Tab label="Car Details" />
          <Tab label="Test Drives" />
          <Tab label="Computer-Generated Cars" />
        </Tabs>
        {this.props.tabValueTop === 0 && <TabContainer><CarInfoContainer /></TabContainer>}
        {this.props.tabValueTop === 1 && <TabContainer className={classes.tab}><CostBenefitPlotContainer /></TabContainer>}
        {this.props.tabValueTop === 2 && <TabContainer><GaCarContainer /></TabContainer>}
	    </Paper>
      <Paper className={classes.player}>
        <TestDrivePlayerContainer />
      </Paper>
      </React.Fragment>
    )
    }
}

export default withStyles(styles)(Viewspace);


