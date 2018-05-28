import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Pit from './Pit';
import PartsBinContainer from '../containers/PartsBinContainer';


const styles = theme => ({
    button: {
          margin: theme.spacing.unit,
        },
  flex: {
    flex: 1
  }
});

let Workspace = (props) =>{
	console.log("Props",props);
  const  classes  = props.classes;
  console.log(classes);
	return (<div id="workspace">
			<Paper>
    <AppBar position="static" color="default">
      {/*<Typography variant="title" className={classes.flex}>
					Build Your Car
				</Typography>*/}
        <Button className={classes.button} variant="raised" color="primary" onClick = {props.handleTestDrive}>Test Drive</Button>
      </AppBar>
				<svg width = {props.width} height = {props.height}>
					<Pit width = {props.width} height = {props.height/2} />
          <PartsBinContainer width = {props.width} height = {props.height/2} 
            y= {props.height/2}/>
				</svg>
			</Paper>
		</div>);
}

export default withStyles(styles)(Workspace);
