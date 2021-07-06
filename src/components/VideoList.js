import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import VideoPlayerContainer from "../containers/VideoPlayerContainer";
import VideoScrubberContainer from "../containers/VideoScrubberContainer";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import FullscreenIcon from "@material-ui/icons/Fullscreen"
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import TimestampListContainer from "../containers/TimestampListContainer";
import { withStyles, makeStyles} from "@material-ui/core";
import { ANALYSIS_TAKEAWAYS, ANALYSIS_OVERVIEW, ANALYSIS_IDEAS } from "../actions/questions";

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

const VideoList = (props) => {
  const classes = props.classes;
  
  return (
    <React.Fragment>

      <List>
        {props.activeVideoList.map((videoIndex, listIndex) => {
          let videoKey = videoIndex;
          if(props.variant=="tutorial"){
            videoKey = "t"+videoIndex;
          }
          return (
          <ListItem key={listIndex}>
            <Paper className={classes.vidPaper}>
                <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                  }}>
                <IconButton 
                  size="small"
                  onClick={(e) => props.handleRemoveVideo(videoIndex)}
                >
                <CloseIcon
                />
                </IconButton>
                <Typography variant='p' className={classes.vidLabel}>
                  Test Drive {videoIndex}; Score: {props.testedRewards[videoIndex]}
                </Typography>
                <IconButton 
                  size="small" 
                  style={{marginLeft:"auto"}}
                  onClick={(e) => props.handleFullscreenVideo(videoKey)}
                >
                  <FullscreenIcon
                  />
                </IconButton>
                </div>
                <div className={classes.player} style={{ padding: "13px" }}>
                  <VideoPlayerContainer
                    testDriveVideo={props.testedVideos[videoIndex]}
                    video_id = {videoKey}
                  />
                </div>
                <Typography variant='p' className={classes.vidLabel}>Analysis Notes</Typography>
                <TimestampListContainer video_id={videoKey} />
                
                  <form className ={classes.root}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                    <TextField
                      label="Performance Overview"
                      variant="outlined"
                      onChange={(e)=>props.handleChangeAnalysis(e, videoKey, ANALYSIS_OVERVIEW)}
                      value = {props.testDriveAnalysis && props.testDriveAnalysis[videoKey] ? props.testDriveAnalysis[videoKey]["overview"] : ""}
                      multiline
                      rows={4}
                    >
                    </TextField>
                    </Grid>
                    {/* <Grid item xs={4}>
                    <TextField
                      label="Takeaways"
                      variant="outlined"
                      onChange={(e)=>props.handleChangeAnalysis(e, videoIndex, ANALYSIS_TAKEAWAYS)}
                      value = {props.testDriveAnalysis && props.testDriveAnalysis[videoIndex] ? props.testDriveAnalysis[videoIndex]["takeaways"] : ""}
                      multiline
                      rows={4}
                    >
                    </TextField>
                    </Grid>
                    <Grid item xs={4}>
                    <TextField
                      label="Questions and Ideas"
                      variant="outlined"
                      onChange={(e)=>props.handleChangeAnalysis(e, videoIndex, ANALYSIS_IDEAS)}
                      value = {props.testDriveAnalysis && props.testDriveAnalysis[videoIndex] ? props.testDriveAnalysis[videoIndex]["ideas"] : ""}
                      multiline
                      rows={4}
                    >
                    </TextField>
                    </Grid> */}
                    </Grid>
                  </form>
                
                </Paper>
            
          </ListItem>
        )})}

        {/* <div className={classes.player} style={{padding:"13px"}}>
        <VideoScrubberContainer /> 
      </div> */}
      </List>
    </React.Fragment>
  );
};

export default withStyles(styles)(VideoList);
