import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TestDriveMultiPlayerContainer from '../containers/TestDriveMultiPlayerContainer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MobileStepper from '@material-ui/core/MobileStepper';
import { ArrowBack, Block } from '@material-ui/icons';




const styles = (theme) => ({
  paper: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    backgroundColor: 'white',//theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '5px',
    // padding: theme.spacing(2, 4, 3),
  },
});

const tutorialSteps = [
    {
        imgPath: 'img/tutorial/help1.png'
    },
    {
        imgPath: 'img/tutorial/help2.png'
    },
    {
        imgPath: 'img/tutorial/help3.png'
    },
    {
        imgPath: 'img/tutorial/help4.png'
    },
    {
        imgPath: 'img/tutorial/help5.png'
    },
    {
        imgPath: 'img/tutorial/help6.png'
    },
    {
        imgPath: 'img/tutorial/help7.png'
    },
    {
        imgPath: 'img/tutorial/help8.png'
    },
    {
        imgPath: 'img/tutorial/help9.png'
    },
    {
        imgPath: 'img/tutorial/help10.png'
    },
    {
        imgPath: 'img/tutorial/help11.png'
    },
    {
        imgPath: 'img/tutorial/help12.png'
    },  
    {
        imgPath: 'img/tutorial/help13.png'
    },
    {
        imgPath: 'img/tutorial/help13a.png'
    },
    {
        imgPath: 'img/tutorial/help13b.png'
    },
    {
        imgPath: 'img/tutorial/help14.png'
    },
    {
        imgPath: 'img/tutorial/help15.png'
    },


]


function VideoModal(props) {
    const classes = props.classes;
    
    //stuff for the help tutorial
    const [activeStep, setActiveStep] = React.useState(0);
    const [expanded, setExpanded] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel: false);
        window.scrollTo(0, expanded.offsetTop-100); 
    }
   

    const body = (
    <div className={classes.paper}>
        <AppBar>
			<Toolbar>
				<Typography style={{"color":"white", "font-family": 'Racing Sans One', "margin":"auto"}} variant="h3">Welcome to ChopShop!</Typography>
			</Toolbar>
		</AppBar>
        <Toolbar></Toolbar>
        <Typography variant='body1'>
            This is a study in which you design a racecar for an AI learning how to drive. If this is your first time, please start by reviewing the tutorial in Step 1. Otherwise, feel free to start with Step 2.
        </Typography>
        {/* <Button onClick={()=> props.handleHelp(!props.helpView)}>{props.helpView ? "Close Help" : "Open Help"}</Button>
        <iframe src={props.api_url + "help"} width="100%" height="700px" hidden={!props.helpView}  style={{border: 1}}>
        </iframe> */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Step 1: Learn about Chopshop.</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container spacing={2}>
                    {/* <Grid item xs={12}>
                        <Typography>
                           
                        </Typography>
                    </Grid> */}
                    
                    <Grid item xs={12}>
                        <img
                            src={tutorialSteps[activeStep].imgPath}
                            style={{"display":"block", "width":"100%", "margin":"auto"}}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            variant="text"
                            activeStep={activeStep}
                            nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                <ArrowForwardIcon />
                            </Button>
                            }
                            backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                <ArrowBackIcon />
                                Back
                            </Button>
                            }
                        />
                    </Grid>
                </Grid>
                
                
                
            </AccordionDetails>
        </Accordion>
        
        <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Step 2: Learn about the current driver.</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <div hidden={props.helpView}>
                <Container spacing={2}>
                    <Typography variant='h5' id="simple-modal-title">An Update on Your Driver's Progress</Typography>
                    <p id="simple-modal-description">
                    The videos below are test drives from your AI driver practicing with your most recent design.<br />
                        Please watch all of the videos to help you answer the questions in Step 3 about your driver.
                    </p>
                </Container>
                <Divider />
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                        <Container>                  
                            <Typography variant='h5'>Test Drive Videos</Typography>
                            <TestDriveMultiPlayerContainer/>  
                            <IconButton aria-label='back' onClick={props.handleBack} disabled={props.counter <= 0}>
                                <ArrowBackIcon />
                            </IconButton>
                            Test Drive Video # {props.counter + 1} / {props.numTestDrives}
                            <IconButton aria-label='forward' onClick={props.handleForward} disabled={props.counter >= props.numTestDrives-1}>
                                <ArrowForwardIcon />
                            </IconButton>
                        </Container>
                    </Grid>
                    <Grid item xs={6}>
                    <Container>
                        <Typography variant='h5'>Your Driver's Progress So Far</Typography>
                        <img src={props.static_url + props.stats_plot} width="370"/>
                    </Container>
                                
                        
                    </Grid>
                
                </Grid>
            </div>
        </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography className={classes.heading}>Step 3: Plan your car and start designing!</Typography>

            </AccordionSummary>
        <AccordionDetails>
        <form onSubmit={props.handleSubmit
        }>
            
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {/* <label>What is the driver doing well?</label> */}
                    <TextField
                        id="driver_approach"
                        fullWidth
                        label="Describe the driver's approach:"
                        placeholder="How would you describe how the AI is trying to drive around the track?"
                        defaultValue= {props.questions.driver_approach}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_approach"
                    /> 
                </Grid>
                <Grid item xs={6}>
                    {/* <label>What is the driver struggling with?</label> */}
                    <TextField
                        id="driver_strengths"
                        fullWidth
                        label="What is the driver doing well?"
                        placeholder="Are there specific aspects of driving it seems to have mastered?"
                        defaultValue= {props.questions.driver_strengths}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_strengths"
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <TextField
                        id="driver_struggles"
                        fullWidth
                        label="What is the driver struggling with?"
                        placeholder="Are there aspects of the track, car, or driving basics that it is struggling with?"
                        defaultValue= {props.questions.driver_struggles}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_struggles"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="driver_design"
                        fullWidth
                        label="What can you modify the car to improve?"
                        placeholder="What is the driver struggling with that you think you can alleviate by modifying the car?"
                        defaultValue= {props.questions.driver_design}
                        multiline
                        rows={4}
                        variant="outlined"
                        name="driver_design"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type='submit' variant='contained'>Start Designing!</Button>
                </Grid>

            </Grid>
        </form>
            </AccordionDetails>
        </Accordion>
        </div>
        

    
);

return (
    <div>
    {/* <button type="button" onClick={handleOpen}>
        Open Modal
    </button> */}
    <Modal
        open={props.modal_state}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        // style={{"overflow":"scroll"}}
    >
        {body}
    </Modal>
    </div>
);
}

export default withStyles(styles)(VideoModal);