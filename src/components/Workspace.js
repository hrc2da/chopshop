import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Pit from './Pit';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import {
  WHEEL_RAD, WHEEL_WIDTH, FRICTION_LIM, ENG_POWER, 
  BRAKE_SCALAR, STEERING_SCALAR, REAR_STEERING_SCALAR, 
  MAX_SPEED, COLOR, BUMPER, SPOILER, REAR_BODY, FRONT_BODY
} from '../actions/carConfig';
import FeatureSelectButton from './FeatureSelectButton';


const styles = theme => ({
    button: {
          margin: theme.spacing.unit,
        },
    bluebutton: {
        margin: theme.spacing.unit,
        color: 'white'
    },
  flex: {
    flex: 1
  },
});

class  Workspace extends Component{
  constructor(props) {
        super(props);
        this.pitRef = React.createRef();
      }
  render () {
	
  const  classes  = this.props.classes;
  
	return (<div id="workspace">
			<Paper>
    <AppBar position="static" color="default">
      {/*<Typography variant="title" className={classes.flex}>
					Build Your Car
				</Typography>*/}
    <Grid container spacing={0}>
      <Grid item xs={4}>
        <Button className={classes.button} disabled = {this.props.loading && !this.props.submitFormOpen} variant="contained" color="green" onClick = {this.props.handleOpenModal}>Info Screen</Button>
      </Grid>
      <Grid item xs={4}>
        <Button className={classes.bluebutton} disabled = {this.props.loading && !this.props.submitFormOpen} variant="contained" color="primary" onClick = {this.props.handleTestDrive}>Test Drive This Car</Button>
      </Grid>
      <Grid item xs={4}>
	      <Button className={classes.button} disabled = {this.props.loading} variant="contained" color="secondary" onClick = {this.props.handlePreSubmit}>Submit my Design!</Button>
      </Grid>
    
      
      <form onSubmit={this.props.handleSubmitDesign} hidden={!this.props.submitFormOpen} > {/*style={this.props.submitFormOpen ? {display : 'block'} : {display:'none'}}>*/}
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="design_description"
          label="Please describe your car design:"
          defaultValue= {this.props.questions.design_description}
          multiline
          required
          fullWidth
          rows={4}
          variant="outlined"
          name="design_description"
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="design_rationale"
          label="Please describe the reasoning behind your design choices:"
          defaultValue= {this.props.questions.design_rationale}
          multiline
          required
          fullWidth
          rows={4}
          variant="outlined"
          name="design_rationale"
        />
        </Grid>
        <Grid item xs={12}><FormLabel style={{textAlign:'left',padding:"10px"}} component='legend'>Which of these features are important to consider when designing for this driver and its current ability? *</FormLabel></Grid>
        {/* <Grid item xs={12}><FormLabel style={{textAlign:'left',padding:"10px"}} component='legend'>Which of these features are you most confident about in your design? *</FormLabel></Grid> */}
        <Grid item xs={4}>
        <FormControl component='fieldset' fullWidth style={{textAlign:'left',padding:"10px"}}>
          
          <FormGroup>
            <FormControlLabel
              control={
              <Checkbox name={WHEEL_RAD} 
                checked={this.props.selectedFeatures[WHEEL_RAD]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Wheel Radius"
              
            />
            <FormControlLabel
              control={
              <Checkbox name={WHEEL_WIDTH} 
                checked={this.props.selectedFeatures[WHEEL_WIDTH]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Wheel Width"
            />
            <FormControlLabel
              control={
              <Checkbox name={FRICTION_LIM} 
                checked={this.props.selectedFeatures[FRICTION_LIM]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Tire Tread"
            />
            <FormControlLabel
              control={
              <Checkbox name={ENG_POWER} 
                checked={this.props.selectedFeatures[ENG_POWER]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Engine Power"
            />
            <FormControlLabel
              control={
              <Checkbox name={BRAKE_SCALAR} 
                checked={this.props.selectedFeatures[BRAKE_SCALAR]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Brake Sensitivity"
            />
            
            <FormControlLabel
              control={
              <Checkbox name={STEERING_SCALAR} 
                checked={this.props.selectedFeatures[STEERING_SCALAR]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Steering Sensitivity"
            />
            <FormControlLabel
              control={
              <Checkbox name={REAR_STEERING_SCALAR} 
                checked={this.props.selectedFeatures[REAR_STEERING_SCALAR]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Rear Steering Power"
            />
            </FormGroup>
            </FormControl>
            <FormHelperText style={{padding:"10px"}}>*required</FormHelperText>
            </Grid>
            <Grid item xs={4}>
            <FormControl component='fieldset' fullWidth style={{textAlign:'left',padding:"10px"}}>
            <FormGroup>
            <FormControlLabel
              control={
              <Checkbox name={MAX_SPEED} 
                checked={this.props.selectedFeatures[MAX_SPEED]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Top Speed Limiter"
            />
            <FormControlLabel
              control={
              <Checkbox name={COLOR} 
                checked={this.props.selectedFeatures[COLOR]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Color"
            />
            <FormControlLabel
              control={
              <Checkbox name={BUMPER} 
                checked={this.props.selectedFeatures[BUMPER]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Bumper Shape"
            />
            <FormControlLabel
              control={
              <Checkbox name={FRONT_BODY} 
                checked={this.props.selectedFeatures[FRONT_BODY]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Front Body Shape"
            />
            <FormControlLabel
              control={
              <Checkbox name={REAR_BODY} 
                checked={this.props.selectedFeatures[REAR_BODY]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Rear Body Shape"
            />
            <FormControlLabel
              control={
              <Checkbox name={SPOILER} 
                checked={this.props.selectedFeatures[SPOILER]}
                onChange={this.props.handleChangeFeatures}
              />}
              label="Spoiler Shape"
            />
          </FormGroup>
          {/* <FormHelperText>Select as many as you feel confident in.</FormHelperText> */}
          <FormHelperText>Select as many as you like.</FormHelperText>
        </FormControl>
        </Grid>
        
        <Grid item xs={12}>
        <Button variant='outlined' style={{margin:'4px'}} onClick={this.props.handleCancelSubmit}>Cancel</Button>
        <Button variant='outlined' style={{margin:'4px'}} type="submit">Finalize Submission</Button>
        </Grid>
    </Grid>
  </form>
  </Grid>
  
  {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
    <label style={{color: 'gray'}}>Number of Episodes:</label>
    <TextField
            style={{width: '70%'}}
            id="n_episodes"
            type="number"
            value = {this.props.numEpisodes}
            onChange={(e,v)=>this.props.handleNumEpisodes(e)}
            InputLabelProps={{
              shrink: true,
            }}
            labelWidth={0}
    />
  </div> */}
	</AppBar>
				<svg width = {this.props.width} height = {this.props.height} onMouseUp = {(e)=>{ console.log(this.pitRef.current.vertexRefs);
                                                                                        let vertexRefs = this.pitRef.current.vertexRefs;
                                                                                          for(let i=0; i<vertexRefs.length; i++){
                                                                                           if(vertexRefs[i].current){
                                                                                              vertexRefs[i].current.getWrappedInstance().handleMouseUp(e);
                                                                                           }

                                                                                          }
                                                                                      }}>
					<Pit width = {this.props.width} ref = {this.pitRef} height = {this.props.height} config = {this.props.carConfig} />
				</svg>
			</Paper>
      <Paper style={{
                      height:"75px",
                      backgroundColor:"#64b5f6"
                    }}>
        <ToggleButtonGroup 
          color="primary" 
          aria-label="outlined primary button group" 
          spacing={4}
          exclusive
          onChange={(e,newFocus)=>this.props.handleSwitchConfigFocus(newFocus)}
        >
          <FeatureSelectButton featureTitle="Wheel Radius" featureTag={WHEEL_RAD} image="img/icons/wheelradius.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Wheel Width" featureTag = {WHEEL_WIDTH} image="img/icons/wheelwidth.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Tire Tread" featureTag = {FRICTION_LIM} image="img/icons/tiretread_inverted.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Engine Horsepower" featureTag = {ENG_POWER} image = "img/icons/horsepower_inverted.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Brake Sensitivity" featureTag = {BRAKE_SCALAR} image = "img/icons/brakes_inverted.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Steering Sensitivity" featureTag = {STEERING_SCALAR} image = "img/icons/steering.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Rear Steering Power" featureTag = {REAR_STEERING_SCALAR} image = "img/icons/rearsteering.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Speed Limiter" featureTag = {MAX_SPEED} image = "img/icons/speedometer.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
          <FeatureSelectButton featureTitle="Paint Color" featureTag = {COLOR} image = "img/icons/color.svg" currentFocus = {this.props.currentFocus} size={"70px"} />
        </ToggleButtonGroup>
      </Paper>
		</div>);
  }
}

export default withStyles(styles)(Workspace);
