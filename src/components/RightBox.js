import React from "react";
import Paper from "@material-ui/core/Paper";
import { withTheme } from "@material-ui/core/styles";
import GaCarContainer from "../containers/GaCarContainer";
import UserCarRadarContainer from "../containers/UserCarRadarContainer";
import CompCarRadarContainer from "../containers/CompCarRadarContainer";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import CarInfoContainer from "../containers/CarInfoContainer";
import CompCarInfoContainer from "../containers/CompCarInfoContainer";
import { withStyles } from "@material-ui/core/styles";
import CostBenefitPlotContainer from "../containers/CostBenefitPlotContainer";
import TestDrivePlayerContainer from "../containers/TestDrivePlayerContainer";
import { TAB_TOP, TAB_BOTTOM } from "../actions/tabs";
import { PlayCircleFilledWhite } from "@material-ui/icons";
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import {
  DESIGN_DESCRIPTION,
  DESIGN_RATIONALE,
  TEST_DRIVE_GOALS
} from '../actions/questions';

import {
  DESIGN_VIEW,
  EVAL_VIEW,
  ANALYSIS_VIEW,
  SET_DESIGN_VIEW,
} from "../actions/views";
import LinearProgress from "@material-ui/core/LinearProgress";
import CarConfigRadarContainer from "../containers/CarConfigRadarContainer";
import ResultsListContainer from "../containers/ResultsListContainer";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
function TabContainerNoPadding(props) {
  return (
    <Typography component="div" style={{ padding: 0 }}>
      {props.children}
    </Typography>
  );
}
const styles = {
  tabbedView: {
    height: 410,
    overflow: "auto",
    marginBottom: 15,
  },
  tab: {
    height: 350,
  },
  designDoc: {
    marginBottom: 30,
    width: "85%",
    textAlign: "left"
  },
  designForm: {
    textAlign: "left"
  },
  player: {
    height: 240,
    width: 320,
    margin: "auto",
  },
  labelRoot: {
    width:"100%",
    textAlign:"left"
  }
};
class RightBox extends React.Component {
  state = {
    tabValue: 0,
  };
  handleChange = (event, value) => {
    console.log("changing the tab", value);
    this.setState({ tabValue: value });
  };
  render() {
    const { classes } = this.props;
    const { theme } = this.props;
    const primaryColor = theme.palette.primary.main;
    const secondaryColor = theme.palette.secondary.main;

    if (this.props.viewId == DESIGN_VIEW) {
      return (
        <React.Fragment>
          <Paper elevation={4} style={{ height: "300px" }}>
            {/* <Fab variant="extended" onClick={(e) => this.props.handleChangeView(e,EVAL_VIEW)} disabled={false}>
                                Test Drive
          </Fab> */}
            <Tabs
              value={this.props.tabValueBottom}
              onChange={(e, v) => this.props.handleSwitchTab(e, TAB_BOTTOM, v)}
              style={{ backgroundColor: primaryColor, color: "white" }}
            >
              <Tab label="Car Analysis" />
              <Tab label="Test Drive Video" />
              <Tab label="Selected Car Details" />
            </Tabs>
            {this.props.tabValueBottom === 0 && (
              <TabContainer>
                <UserCarRadarContainer height={90}/>
              </TabContainer>
            )}
            {this.props.tabValueBottom === 1 && (
              <Box style={{ backgroundColor: primaryColor, height: "300px" }}>
                <div className={classes.player} style={{ padding: "13px" }}>
                  <TestDrivePlayerContainer />
                </div>
              </Box>
            )}

            {this.props.tabValueBottom === 2 && (
              <TabContainer>
                <CompCarInfoContainer />
              </TabContainer>
            )}
          </Paper>
          <Paper className={classes.tabbedView}>
            <Tabs
              value={this.props.tabValueTop}
              onChange={(e, v) => this.props.handleSwitchTab(e, TAB_TOP, v)}
              scrollable
              scrollButtons="auto"
              style={{ backgroundColor: primaryColor, color: "white" }}
            >
              <Tab label="Tune Component" />
              {/* <Tab label="Selected Car Results" /> */}
              <Tab label="Test Drive History" />
            </Tabs>
            {this.props.tabValueTop === 0 && (
              <TabContainerNoPadding>
                <CarInfoContainer />
              </TabContainerNoPadding>
            )}
            {/* {this.props.tabValueTop === 1 && <TabContainer><CompCarRadarContainer /></TabContainer>} */}
            {this.props.tabValueTop === 1 && (
              <TabContainer className={classes.tab}>
                <CostBenefitPlotContainer />
              </TabContainer>
            )}
          </Paper>
        </React.Fragment>
      );
    } else if (this.props.viewId == EVAL_VIEW) {
      if(this.props.nTestDrives >= this.props.testDriveLimit && ! this.props.resultReady){
        return (
          <React.Fragment>
            <Paper elevation={4}>
              Test drive limit exceeded. Please submit.
            </Paper>
          </React.Fragment>
        )
      }
      return (
        <React.Fragment>
          <Paper elevation={4} style={{paddingBottom:20}}>
            <Grid container spacing={2}>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Button
                  className={classes.bluebutton}
                  disabled={this.props.loading || this.props.resultReady}
                  variant="contained"
                  color="primary"
                  onClick={this.props.handleTestDrive}
                >
                  Test Drive This Car
                </Button>
                {/* <Switch /> Practice with Design First */}
                <FormControlLabel
                  control={
                    <Switch
                      name="train"
                      onChange={this.props.handlePractice}
                      checked={this.props.practiceChecked}
                    />
                  }
                  label="Practice with Car First:"
                  labelPlacement='start'
                  style={{paddingLeft:"20px"}}
                />
    {((this.props.loading ) && this.props.practiceChecked) && <div><Typography variant="p">
              <strong>Practice Progress (slow, please be patient)</strong>
            </Typography>
                <LinearProgressWithLabel value={this.props.practiceProgress} />
                </div>}
    {(this.props.loading ) && <div><Typography variant="p">
              <strong>Test Progress</strong>
            </Typography>
                <LinearProgressWithLabel value={this.props.testDriveProgress} />
                </div>}
              
              </Grid>
            </Grid>
            <Typography variant='h6'>
              Please document this test drive while waiting for it to complete.
            </Typography>
            <form onSubmit={this.props.handleSubmitRationale} id="loadingform">
              {/*style={this.props.submitFormOpen ? {display : 'block'} : {display:'none'}}>*/}
              { this.props.resultReady && <Button
              variant="outlined"
              type="submit"
              // onClick={(e) => this.props.handleChangeView(e, ANALYSIS_VIEW)}
            >
              Analyze Results
            </Button>}
              <div>
                Describe the important features you are testing with this prototype:
                    <TextField
                      id="design_description"
                      // defaultValue= {this.props.questions.design_description}
                      multiline
                      required
                      // className="longform"
                      classes={{
                        root:classes.designDoc
                      }}
                      rows={4}
                      variant="outlined"
                      name="design_description"
                      value={this.props.questions.design_description}
                      onChange={(e)=>this.props.handleChangeRationale(e,DESIGN_DESCRIPTION)}
                    />
                </div>
                <div>
                  Describe your reasoning behind these choices:
                  <TextField
                    id="design_rationale"
                    // label="Please describe the reasoning behind your design choices in this version of your car:"
                    // defaultValue= {this.props.questions.design_rationale}
                    multiline
                    required
                    // className="longform"
                    classes={{
                      root:classes.designDoc
                    }}
                    rows={4}
                    variant="outlined"
                    name="design_rationale"
                    value={this.props.questions.design_rationale}
                    onChange={(e)=>this.props.handleChangeRationale(e,DESIGN_RATIONALE)}
                  />
                </div>
                <div>
                  What do you hope to learn from this test drive? What do you
                  expect to see?
                  <TextField
                    id="design_rationale"
                    // label="What do you hope to learn from this test drive? What do you expect to see?"
                    // defaultValue= {this.props.questions.design_rationale}
                    multiline
                    required
                    // className="longform"
                    classes={{
                      root:classes.designDoc
                    }}
                    rows={4}
                    variant="outlined"
                    name="test_drive_goals"
                    value={this.props.questions.test_drive_goals}
                    onChange={(e)=>this.props.handleChangeRationale(e,TEST_DRIVE_GOALS)}
                  />
                </div>
              
              
            </form>
          </Paper>
        </React.Fragment>
      );
    } else if (this.props.viewId == ANALYSIS_VIEW) {
      return (
        <React.Fragment>
          {/* <Button size="small" onClick={(e) => this.props.handleChangeView(e, DESIGN_VIEW)} disabled={false}>
                                Go to Design
                                
          </Button> */}
          <ResultsListContainer />
        </React.Fragment>
      );
    } else {
      return <div>Requested a non-existant view.</div>;
    }
  }
}

export default withTheme(withStyles(styles)(RightBox));
