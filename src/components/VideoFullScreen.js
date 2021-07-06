import React from 'react';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { ANALYSIS_OVERVIEW } from '../actions/questions';


import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import TimestampListContainer from '../containers/TimestampListContainer';

const styles = (theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: "95%"
      },
      '& .MuiPaper-root': {
        margin: 'auto'
      }
    },
    button: {
      margin: theme.spacing.unit,
    },
    bluebutton: {
      margin: theme.spacing.unit,
      color: "white",
    },
    vidLabel: {
      padding: 4,
      fontSize: 18
    },
    flex: {
      flex: 1,
    },
    vidPaper: {
      margin: 'auto'
    }
  });
const VideoFullScreen = (props) => {
    const classes = props.classes;
    return <Modal
      open = {props.showFullscreen}
      onClose = {props.handleClose}
    >
        <Paper className={classes.vidPaper}>
                <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                  }}>
                <Typography variant='p' className={classes.vidLabel}>
                  Test Drive {props.videoIndex}; Score: {props.reward}
                </Typography>
                <IconButton 
                  size="small" 
                  style={{marginLeft:"auto"}}
                  onClick={props.handleClose}
                >
                  <FullscreenExitIcon
                  />
                </IconButton>
                </div>
                <div className={classes.player} style={{ padding: "13px" }}>
                  <VideoPlayerContainer
                    testDriveVideo={props.video}
                    video_id = {props.videoIndex}
                    height = {400}
                  />
                </div>
                <Typography variant='p' className={classes.vidLabel}>Analysis Notes</Typography>
                <TimestampListContainer video_id={props.videoIndex} />
                
                  <form className ={classes.root}>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                    <TextField
                      label="Performance Overview"
                      variant="outlined"
                      onChange={(e)=>props.handleChangeAnalysis(e, props.videoIndex, ANALYSIS_OVERVIEW)}
                      value = {props.testDriveAnalysis}
                      multiline
                      rows={4}
                    >
                    </TextField>
                    </Grid>
                    {/* <Grid item xs={4}>
                    <TextField
                      label="Takeaways"
                      variant="outlined"
                      onChange={(e)=>props.handleChangeAnalysis(e, props.videoIndex, ANALYSIS_TAKEAWAYS)}
                      value = {props.testDriveAnalysis[videoIndex]["takeaways"]}
                      multiline
                      rows={4}
                    >
                    </TextField>
                    </Grid>
                    <Grid item xs={4}>
                    <TextField
                      label="Questions and Ideas"
                      variant="outlined"
                      onChange={(e)=>props.handleChangeAnalysis(e, props.videoIndex, ANALYSIS_IDEAS)}
                      value = {props.testDriveAnalysis[videoIndex]["ideas"]}
                      multiline
                      rows={4}
                    >
                    </TextField>
                    </Grid> */}
                    </Grid>
                  </form>
                
                </Paper>
    </Modal>
}

export default withStyles(styles)(VideoFullScreen);