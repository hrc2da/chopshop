import React from 'react';
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(({path,loading,classes}) =>{
  return (
    <div>
{ loading &&
  <div>
   <CircularProgress size={300} thickness={5} className = {classes.progress}/>
   <Typography variant='subheading'>Test driving your car...</Typography>
   </div>
   }
      { path && !loading && <Player
                  autoPlay
                  fluid={false}
                  height={400}
                  width={400}
                  src={path}
                />}
    </div>
  );
});
