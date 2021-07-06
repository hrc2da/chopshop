import React from 'react';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import StaticCarContainer from '../containers/StaticCarContainer';
import CarConfigRadarContainer from '../containers/CarConfigRadarContainer';
import Avatar from "avataaars";
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


const SubmitModal = (props) =>{
    return <Modal
        open={props.open}
    >
        <Paper>
            <Grid container spacing={1}>
                    
                    <Grid item xs={6}>
                        <Paper>
                            <Typography variant="h4" style={{"textAlign":"center", "padding":"10px"}}>Final Design Report</Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    
                                    <svg
                                    width={props.width / 3}
                                    height={props.height / 2}
                                    >
                                    <StaticCarContainer
                                        // rotation={270}
                                    />
                                    </svg>
                                </Grid>
                                <Grid item xs={8}>
                                    <CarConfigRadarContainer style={{"verticalAlign":"center"}} shortLabels={true} />
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{"textAlign": "center"}}>
                                    <Button
                                            onClick={props.openPersona}
                                        >
                                        <Avatar
                                        style={{ width: "50px", height: "50px", verticalAlign: "bottom" }}
                                        avatarStyle="Circle"
                                        topType={props.avatar.topType}
                                        accessoriesType={props.avatar.accessoriesType}
                                        hairColor={props.avatar.hairColor}
                                        facialHairType={props.avatar.facialHairType}
                                        clotheType={props.avatar.clotheType}
                                        clotheColor={props.avatar.clotheColor}
                                        eyeType={props.avatar.eyeType}
                                        eyebrowType={props.avatar.eyebrowType}
                                        mouthType={props.avatar.mouthType}
                                        skinColor={props.avatar.skinColor}
                                        onClick={props.openPersona}
                                        />
                                        
                                            <Typography variant="h6">View Driver Profile</Typography>
                                        </Button>
                                        
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    
                    
                    
                    <Grid item xs={6}>
                    <Paper>
                    <Typography variant="h4" style={{"textAlign":"center", "padding":"10px"}}>Documentation</Typography>
                        <form width="100%" padding="2px" onSubmit = {(e)=>{e.preventDefault(); props.handleSubmit(e)}} onChange={(e)=>props.handleFormChange(e.target.name,e.target.value)}>
                            <div>
                                What are the key features of your design?
                                <TextField
                                    multiline
                                    required
                                    rows={4}
                                    fullWidth
                                    variant="outlined"
                                    name="key_features"
                                    value={props.keyFeatures}
                                >

                                </TextField>
                            </div>
                            <div>
                                What needs of your client does your design address?
                                <TextField
                                    multiline
                                    required
                                    rows={4}
                                    fullWidth
                                    variant="outlined"
                                    name="user_needs"
                                    value={props.userNeeds}
                                >

                                </TextField>
                            </div>
                            <div>
                                Please describe your design process:
                                <TextField
                                    multiline
                                    required
                                    rows={4}
                                    fullWidth
                                    variant="outlined"
                                    name="design_process"
                                    value={props.designProcess}
                                >

                                </TextField>
                            </div>


                        <Button type="submit" variant="contained">Submit</Button>
                        <Button variant="contained" onClick={props.handleClose}>Cancel</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
        

    </Modal>
}


export default withStyles(styles)(SubmitModal);