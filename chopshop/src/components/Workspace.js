import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Pit from './Pit';
import PartsBin from './PartsBin';

let Workspace = (props) =>{
	console.log(props);
	return (<div id="workspace">
			<Paper>
				<Typography variant="display1">
					This is the workspace.
				</Typography>
				<svg width = {props.width} height= {props.height}>
					<Pit width = {props.width} height = {props.height/2} />
					<PartsBin width = {props.width} height = {props.height/2} y= {props.height/2}/>
				</svg>
			</Paper>
		</div>);
}

export default Workspace;
