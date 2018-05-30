import React, {Component} from 'react';
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

class  Workspace extends Component{
  constructor(props) {
        super(props);
        this.pitRef = React.createRef();
      }
  render () {
	console.log("Props",this.props);
  const  classes  = this.props.classes;
  console.log(classes);
	return (<div id="workspace">
			<Paper>
    <AppBar position="static" color="default">
      {/*<Typography variant="title" className={classes.flex}>
					Build Your Car
				</Typography>*/}
        <Button className={classes.button} variant="raised" color="primary" onClick = {this.props.handleTestDrive}>Test Drive</Button>
      </AppBar>
				<svg width = {this.props.width} height = {this.props.height} onMouseUp = {(e)=>{ console.log(this.pitRef.current.vertexRefs);
                                                                                        let vertexRefs = this.pitRef.current.vertexRefs;
                                                                                          for(let i=0; i<vertexRefs.length; i++){
                                                                                           if(vertexRefs[i].current){
                                                                                              vertexRefs[i].current.getWrappedInstance().handleMouseUp(e);
                                                                                           }

                                                                                          }
                                                                                      }}>
					<Pit width = {this.props.width} ref = {this.pitRef} height = {this.props.height/2} config = {this.props.carConfig} />
          <PartsBinContainer width = {this.props.width} height = {this.props.height/2} 
            y= {this.props.height/2}/>
				</svg>
			</Paper>
		</div>);
  }
}

export default withStyles(styles)(Workspace);
