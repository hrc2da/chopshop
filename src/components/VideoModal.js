import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import TestDriveMultiPlayerContainer from "../containers/TestDriveMultiPlayerContainer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MobileStepper from "@material-ui/core/MobileStepper";
import { ArrowBack, Block, TramOutlined } from "@material-ui/icons";
import VideoListContainer from '../containers/VideoListContainer';
import PersonaModalContainer from '../containers/PersonaModalContainer';

import chopshoprobot from '../chopshoprobot.png';
const styles = (theme) => ({
  paper: {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    backgroundColor: "white", //theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: "5px",
    overflowY: "scroll",
    // backgroundImage: `url(${chopshoprobot})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: "auto"
    // padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 500,
    // width: 640,
    backgroundSize: "80%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#f1f0f0",
    textAlign: "center"
  },
  cardtext: {
    textAlign: "center",
    fontSize: "15pt",
    height: 100,
    color: "white",
    backgroundColor: "#1f4563",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const tutorialSteps = [
  { imgPath: "img/tutorial/rev3/1.png",
    text: "The ChopShop Garage is a workshop that customizes race cars for robot drivers."
  },
  { imgPath: "img/tutorial/rev3/2.png",
    text: "You have been hired as one of ChopShop’s race car designers. It is your job to modify a race car to suit a particular robot driver."
  },
  { imgPath: "img/tutorial/rev3/3.png",
    text: "As a new hire, your first client is still learning to drive. The car that you design should account for this. Your modifications should make it easier for the robot to drive at its current skill level and allow it to improve its driving with practice."
  },
  { imgPath: "img/tutorial/rev3/4.png",
    text: "You’ll start by getting to know your client. Watch the 10 videos we've provided of it driving a basic car. As you are watching these videos, think about the strengths and weaknesses of the driver and fill out the driver profile accordingly. The profile you create of the driver and its needs will form the basis of the car that you design."
  },
  { imgPath: "img/tutorial/rev3/5.1.png",
    text: "You will notice that there are three different videos to watch labeled \"Environment View\", \"Driver View\", and \"Predicted Future\". The \"Environment View\" is a standard view of the robot driving on the track."
  },
  { imgPath:"img/tutorial/rev3/5.2.png",
    text: "The \"Driver View\" is the robot's perspective while driving on the track. The \"Predicted Future\" shows what the robot believes will happen a few seconds in the future as it drives on the track. Pay attention to how the robot's predictions differ from the \"Environment View\". Noting the difference may help you to better modify the race car to remedy what the robot is struggling with."
  },
  { imgPath:"img/tutorial/rev3/5.3.png",
    text: "The \"Predicted Future\" shows what the robot believes will happen a few seconds in the future as it drives on the track. Pay attention to how the robot's predictions differ from the \"Environment View\". Noting the difference may help you to better modify the race car to remedy what the robot is struggling with."
  },
  { imgPath: "img/tutorial/rev3/6.png",
    text: "As you are watching the three videos, you should press pause when you notice discrepancies between \"Predicted Future\" and \"Environment View\". At these timestamps, click “ADD NOTE\" and the window in the bottom image will pop up. You should fill out this note and click “SAVE NOTE\" when you have finished."
  },
];


const tutorialSteps_pt2 = [
  { imgPath: "https://drive.google.com/uc?export=view&id=1lFg2nvWNrj-SNBVk4DJB0LDIyoobPeBm",
    text: "Once you have a good understanding of your client’s needs, you should sketch out a rough plan for modifications."
  },
  { imgPath: "https://drive.google.com/uc?export=view&id=1KBIVB3i9ZwiQAuAPva5CuCsjk4RuCQIh",
    text: "Now you can go ahead and click \"START DESIGNING\" which will take you the garage so you can start prototyping!"
  },
  { imgPath: "https://drive.google.com/uc?export=view&id=10QmWvHGa30Ozm4fF19xjPaxhiAbSo1da",
    text: "The garage floor is broken up into three main sections. To the left, you will see the race car that you will be working on. Below the race car is a panel of specific components that you can fine tune."
  },
  { imgPath: "https://drive.google.com/uc?export=view&id=1o-JGotrj8LgbCI7KY-F9ziB1QI9iXKyU",
    text: "If you select a component on the bottom panel, you will be able to read its description under “TUNE COMPONENT\" in the bottom right section of the garage. You can modify the value of this component here by adjusting the slider shown at the bottom."
  },
  { imgPath: "https://drive.google.com/uc?export=view&id=1915jFM1PXPa2hbC5_JAlM9VUR9DD0zX-",
    text: "You can also alter the shape of the race car by clicking and dragging the circles on its perimeter. Make sure not to create any holes in the car!"
  },
  { imgPath: "https://drive.google.com/uc?export=view&id=12VR7-sW2CLZuddsB8XBViHnfrps6z5Bt",
    text: "Above the tuning panel, you’ll see a plot showing the relative weight, cost, and engine power of the current design."
  },
  { imgPath: "https://drive.google.com/uc?export=view&id=10tamyLggQdC53kpCyeV097uc-hAnAdiG",
  text: "Each test drive is scored on a range from -100 to 1000 based on how much of the track the driver covered. You can see the material cost and driving score of all your designs by opening the Test Drive History panel in the bottom right corner."
},
{ imgPath: "https://drive.google.com/uc?export=view&id=1JfCKf-QO-tv2fMNvpwEw8d5EQ6cINwuT",
text: "When you click a point on this scatterplot, you will see the car body overlaid on the current body, as well as the video for the test drive in the upper right panel. You can open the “SELECTED CAR DETAILS\" panel next to the video to see the full design details. To unselect a car, just click anywhere on the scatterplot background."
},
{ imgPath: "https://drive.google.com/uc?export=view&id=1J_WBfwLEz3MoSHyIppcvCz5qzf5teZ4w",
text: "If you want to test out a design with your client, hit the “TEST DRIVE\" button in the top right corner of the garage space. Test drives are useful because they show how your design choices help or hurt the robots driving. Understanding what works and what does work for the driver, will help you ultimately create the best design."
},
{ imgPath: "https://drive.google.com/uc?export=view&id=1advnXMbIny8i3s9B3y1H_Y_GHcUt_T7n",
text: "This will take you to a new page as shown. You will want to click “TEST DRIVE THIS CAR\". While this is loading, you should fill out the questions on the right side of the page. These questions are important because they make it so that you design with a goal in mind. Designing with a purpose is going to give you and your driver the most positive outcome."
},
{ imgPath: "https://drive.google.com/uc?export=view&id=1Jyi0hg1b-tjliAW1DOBMQ95rQr_dczze",
text: "Once the test drive has finished loading you can click on “ANALYZE RESULTS\" as shown. This will take you to a new page that shows the results of all the previous test drives your robot has completed."
},
{ imgPath: "https://drive.google.com/uc?export=view&id=18QRTZnO2RZJ8Ao1Te05GXDFiW-KRTKAr",
text: "This is the page where you can view the results of your previous test drives. If you want to watch the videos from a specific drive, click on the respective row in the chart to the right and the videos along with the notes you’ve taken will appear on the left side of the page. If you want to get rid of this, you should click on the “X\" in the top left corner of the video “box\"."
},
{ imgPath: "https://drive.google.com/uc?export=view&id=1QKADjJ4TLcWegwXuyzxhbj9zIztMtg4s",
text: "The previous results of your test drives can also be accessed by clicking “VIEW RESULTS\" in the top left corner of the page."
},


];

function VideoModal(props) {
  const classes = props.classes;

  //stuff for the help tutorial
  const [activeStep, setActiveStep] = React.useState(0);
  const [expanded, setExpanded] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const [activeStep_pt2, setActiveStep_pt2] = React.useState(0);
  const maxSteps_pt2 = tutorialSteps_pt2.length;

  const handleNext = (e,pt2=false) => {
    if(pt2){
      console.log("asdfds");
      setActiveStep_pt2(activeStep_pt2 + 1);
    }
    else{
      setActiveStep(activeStep + 1);
    }
    
  };

  const handleBack = (e,pt2=false) => {
    if(pt2){
      setActiveStep_pt2(activeStep_pt2 - 1);
    }
    else{
      setActiveStep(activeStep - 1);
    }
    
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    window.scrollTo(0, expanded.offsetTop - 100);
  };

  const body = (
    <div className={classes.paper}>
      <AppBar>
        <Toolbar>
          <Typography
            style={{
              color: "white",
              "font-family": "Racing Sans One",
              margin: "auto",
            }}
            variant="h3"
          >
            Welcome to ChopShop!
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      {/* <Typography variant="body1" style={{"backgroundColor":"white"}}>
        This is a study in which you design a racecar for an AI learning how to
        drive. If this is your first time, please start by reviewing the
        tutorial in Step 1. Otherwise, feel free to start with Step 2.
      </Typography> */}
      {/* <Button onClick={()=> props.handleHelp(!props.helpView)}>{props.helpView ? "Close Help" : "Open Help"}</Button>
        <iframe src={props.api_url + "help"} width="100%" height="700px" hidden={!props.helpView}  style={{border: 1}}>
        </iframe> */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleAccordionChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Step 1: Learn about Chopshop.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
                        <Typography>
                           
                        </Typography>
                    </Grid> */}
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              {/* <img
                src={tutorialSteps[activeStep].imgPath}
                style={{ display: "block", maxHeight: "100%", maxWidth: "100%", margin: "auto" }}
              /> */}
              <Card>
                <CardMedia 
                  className={classes.media}
                  image={tutorialSteps[activeStep].imgPath}

              />
                <CardContent
                  className={classes.cardtext}
                >
                  
                  {tutorialSteps[activeStep].text}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    <ArrowForwardIcon />
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    <ArrowBackIcon />
                    Back
                  </Button>
                }
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleAccordionChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Step 2: Learn about the current driver.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div hidden={props.helpView}>
         
            <Grid container spacing={1}>
              <Grid item xs={12}>
                  <Typography variant="h5" id="simple-modal-title">
                  Client Research File
                </Typography>
                <p id="simple-modal-description">
                  The videos below are test drives from your AI driver practicing
                  with your most recent design. 
                  {/* <br /> */}
                  Please watch all of the videos to help you fill out the driver profile on the right.
                </p>
              </Grid>
            <Divider />
              <Grid item xs={5}>
                <Container>
                  {/* <Typography variant="h5">Test Drive Videos</Typography> */}
                  <VideoListContainer list="tutorial"/>
                  {/* <IconButton
                    aria-label="back"
                    onClick={props.handleBack}
                    disabled={props.counter <= 0}
                  >
                    <ArrowBackIcon />
                  </IconButton>
                  Test Drive Video # {props.counter + 1} / {props.numTestDrives}
                  <IconButton
                    aria-label="forward"
                    onClick={props.handleForward}
                    disabled={props.counter >= props.numTestDrives - 1}
                  >
                    <ArrowForwardIcon />
                  </IconButton> */}
                </Container>
              </Grid>
              <Grid item xs={7}>
                <Container>
                {/* <Typography variant="h5">Driver Profile</Typography> */}
                <PersonaModalContainer variant="noModal" />
                  {/* <Typography variant="h5">
                    Your Driver's Progress So Far
                  </Typography>
                  <img src={props.static_url + props.stats_plot} width="370" /> */}
                </Container>
              </Grid>
              <Grid item xs={5}></Grid>
              <Grid item xs={7}><Button variant="contained" onClick={handleAccordionChange("panel2")}>Continue</Button></Grid>
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleAccordionChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Step 3: Plan your car and start designing!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                {/* <img
                  src={tutorialSteps[activeStep].imgPath}
                  style={{ display: "block", maxHeight: "100%", maxWidth: "100%", margin: "auto" }}
                /> */}
                <Card>
                  <CardMedia 
                    className={classes.media}
                    image={tutorialSteps_pt2[activeStep_pt2].imgPath}

                />
                  <CardContent
                    className={classes.cardtext}
                  >
                    
                    {tutorialSteps_pt2[activeStep_pt2].text}
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <MobileStepper
                  steps={maxSteps_pt2}
                  position="static"
                  variant="text"
                  activeStep={activeStep_pt2}
                  nextButton={
                    <Button
                      size="small"
                      onClick={(e)=>handleNext(e,true)}
                      disabled={activeStep_pt2 === maxSteps_pt2 - 1}
                    >
                      Next
                      <ArrowForwardIcon />
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={(e)=>handleBack(e,true)}
                      disabled={activeStep_pt2 === 0}
                    >
                      <ArrowBackIcon />
                      Back
                    </Button>
                  }
                />
              </Grid>
            </Grid>
          <form onSubmit={props.handleSubmit} style={{width:"97%"}}>
            <Grid container spacing={1} >
              <Grid item xs={12}>
                <TextField
                  id="driver_design_plan"
                  fullWidth
                  required
                  label="Sketch out a plan to improve your client's car."
                  placeholder="What features of the car will you adjust? What will you experiment with? What do you need to learn about the driver?"
                  defaultValue={props.design_plan}
                  multiline
                  rows={4}
                  variant="outlined"
                  name="driver_design_plan"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Start Designing!
                </Button>
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
