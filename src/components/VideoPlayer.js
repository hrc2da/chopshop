import React from "react";
import {useRef} from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import ReactPlayer from "react-player/file";
import "../../node_modules/video-react/dist/video-react.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = (theme) => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(
  ({ url, path, loading, video_id, classes, counter, playing, played, duration, playerHeight, handleEnded, handleDuration, editDialogOpen, editingNote, editingNoteId, handleEditNote, handleCloseEditDialog, noteDialogOpen, handleOpenNoteDialog, handleCloseNoteDialog, handleSaveNote, handleOpenInfoDialog, infoDialogOpen, handleCloseInfoDialog, carInfo, handlePlayPause, handleSeekMouseDown, handleSeekChange, handleSeekMouseUp }) => {
    console.log(path);
    const player = useRef(null);
    if (Array.isArray(path) == true) {
      path = url + path[counter];
    }
    return (
      <div>
        {loading && (
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CircularProgress
                  style={{ color: "white" }}
                  size={100}
                  thickness={5}
                  className={classes.progress}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography style={{ color: "white" }} variant="body1">
                  Test driving your car...relax for a bit, this should take a
                  few minutes.
                </Typography>
              </Grid>
            </Grid>
          </div>
        )}
        {path && !loading && (
          // <Player autoPlay fluid={false} height={200} width={700} src={path} />
          <div>
            <ReactPlayer 
              ref={player}
              url={path} 
              width="100%" 
              height={playerHeight}
              playing={playing}
              muted={true}
              progressInterval={20}
              onProgress = {(state)=>handleSeekChange(state.played,video_id)}
              onDuration = {(dur)=>handleDuration(dur, video_id)}
              onEnded = {(e)=>handleEnded(e,video_id)}
            />
            <div>
            <Grid container style={{textAlign:"center"}}>
              <Grid item xs={4}>Environment View</Grid>
              <Grid item xs={4}>Driver View</Grid>
              <Grid item xs={4}>Predicted Future</Grid>
            </Grid>
              <IconButton onClick={(e)=>{
                let target = Math.max(played-0.01, 0);
                player.current.seekTo(target);
                handleSeekChange(target, video_id);
              }}><KeyboardArrowLeftIcon /></IconButton>
              <IconButton onClick={(e)=>handlePlayPause(e,video_id)}>{playing ? <PauseIcon /> : <PlayArrowIcon />}</IconButton>
              
              {new Date(1000*played*duration).toISOString().substr(14,7)}
              <IconButton onClick={(e)=>{
                let target = Math.min(played+0.01, 0.999999);
                player.current.seekTo(target);
                handleSeekChange(target, video_id);
              }}><KeyboardArrowRightIcon /></IconButton>
              <Button
                onClick={(e)=>handleOpenNoteDialog(e,video_id)}
              >Add Note Here</Button>
              <Button
                onClick={(e)=>handleOpenInfoDialog(e,video_id)}
              >
                Info
              </Button>
              <Dialog
                open={infoDialogOpen}
                onClose={handleCloseInfoDialog}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle>
                  Car Prototype Information
                </DialogTitle>
                <DialogContent
                  style={{padding:"24px 40px"}}
                >
                  {carInfo == "tutorial" && <Typography variant="p">This is the default car design.</Typography>}
                  {carInfo == "none" && <Typography variant="p">No info provided for this design.</Typography>}
                  {carInfo != "tutorial" && carInfo != "none" && <List>
                      <ListItem>
                        Design Description: {carInfo.design_description}
                      </ListItem>
                      <ListItem>
                        Design Rationale: {carInfo.design_rationale}
                      </ListItem>
                      <ListItem>
                        Test Drive Goals: {carInfo.test_drive_goals}
                      </ListItem>
                    </List>}
                </DialogContent>

              </Dialog>

              <Dialog 
                open={noteDialogOpen} 
                onClose={handleCloseNoteDialog} 
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">New Note</DialogTitle>
                <form action="/" method="POST" onSubmit={(e) => {
                    e.preventDefault();
                    let note = e.target.querySelector('textarea').value;
                    handleSaveNote(note,video_id,played*duration);
                 } 
                 }>
                <DialogContent>
                  <DialogContentText>
                    Timestamp: {new Date(1000*played*duration).toISOString().substr(14,7)}
                  </DialogContentText>
                  
                  <TextField
                    autoFocus
                    margin="dense"
                    id="note"
                    label="Note"
                    multiline
                    rowsMax={4}
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseNoteDialog} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Save Note
                  </Button>
                </DialogActions>
                </form>
              </Dialog>

              <Dialog 
                open={editDialogOpen} 
                onClose={handleCloseEditDialog} 
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Edit Note</DialogTitle>
                <form action="/" method="POST" onSubmit={(e) => {
                    e.preventDefault();
                    let note = e.target.querySelector('textarea').value;
                    handleEditNote(note,video_id,editingNoteId);
                 } 
                 }>
                <DialogContent>
                  <DialogContentText>
                    Timestamp: {editingNote &&  new Date(1000*editingNote.time).toISOString().substr(14,7)}
                  </DialogContentText>
                  
                  <TextField
                    autoFocus
                    margin="dense"
                    id="note"
                    label="Note"
                    multiline
                    rowsMax={4}
                    fullWidth
                    defaultValue={editingNote && editingNote.text}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseEditDialog} color="primary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Save Note
                  </Button>
                </DialogActions>
                </form>
              </Dialog>
              <input
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onMouseDown={(e)=>handleSeekMouseDown(e,video_id)}
                    onChange={(e)=>{
                      player.current.seekTo(parseFloat(e.target.value));
                      return handleSeekChange(parseFloat(e.target.value),video_id);
                    }
                    }
                    onMouseUp={(e)=>{
                        console.log("caught mouseup")
                        // player.seekTo(parseFloat(e.target.value));
                        return handleSeekMouseUp(e,video_id);
                      }}
                    style={{width:"100%"}}
                  />
            </div>
          </div>
        )}
      </div>
    );
  }
);
