import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import {} from "../actions/persona";
import Avatar from "avataaars";
import {
  SET_AVATAR,
  SET_NAME,
  PERSONA_EXPERIENCE,
  PERSONA_STRENGTHS,
  PERSONA_STRUGGLES,
  PERSONA_SHORT_TERM_GOALS,
  PERSONA_LONG_TERM_GOALS,
  PERSONA_REQUIREMENTS,
} from "../actions/persona";
const styles = (theme) => ({
  persona: {
    padding: "40px",
    width: "60%",
    textAlign: "center",
  },
  noModal: {
    width: "100%",
    textAlign: "center",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25%",
    },
    "& .multiline-full": {
      width: "98%",
    },
    "& .multiline-half": {
      width: "48%",
    },
  },
});

function PersonaModal(props) {
  const classes = props.classes;
  let driverName = props.name ? props.name : "the driver"
  const body = (
    <Paper className={props.variant=="noModal" ? classes.noModal : classes.persona}>
      <Typography variant="h3">Driver Profile</Typography>
      <div>
        <Avatar
          style={{ width: "100px", height: "100px" }}
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
        />
      </div>
      <div>
        <Button variant="contained" onClick={props.handleNewAvatar}>
          <AutorenewIcon />
          New Image
        </Button>
      </div>

      <form className={classes.root} onSubmit={props.handleSubmit}>
        <div>
          <TextField
            label="Name"
            placeholder="The Driver"
            variant="outlined"
            value={props.name}
            onChange={props.handleChangeName}
          />
        </div>
        <div>
          <TextField
            className="multiline-full"
            label={
              "Based on your observations, describe the environment and situations that you think " + driverName + " typically encounters:"
            }
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => props.handleChangeAnswer(e, PERSONA_EXPERIENCE)}
            value={props.persona.experience}
          />
        </div>
        <div>
          <TextField
            className="multiline-half"
            label={"What is " + driverName + " doing well? Give examples."}
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => props.handleChangeAnswer(e, PERSONA_STRENGTHS)}
            value={props.persona.strengths}
          />
          <TextField
            className="multiline-half"
            label={"What is " + driverName + " struggling with? Give examples."}
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => props.handleChangeAnswer(e, PERSONA_STRUGGLES)}
            value={props.persona.struggles}
          />
        </div>
        <div>
          <TextField
            className="multiline-half"
            label={"Describe immediate goals for " + driverName + ":"}
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => props.handleChangeAnswer(e, PERSONA_SHORT_TERM_GOALS)}
            value={props.persona.shortGoals}
          />
          <TextField
            className="multiline-half"
            label={"Describe future goals for " + driverName + ":"}
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => props.handleChangeAnswer(e, PERSONA_LONG_TERM_GOALS)}
            value={props.persona.longGoals}
          />
        </div>
        <div>
          <TextField
            className="multiline-full"
            label={
              "Based on the above, define up to three priority requirements for " +
              driverName +
              "'s car that you hope to satisfy in your design:"
            }
            multiline
            rows={4}
            variant="outlined"
            onChange={(e) => props.handleChangeAnswer(e, PERSONA_REQUIREMENTS)}
            value={props.persona.requirements}
          />
        </div>
        {props.variant!='noModal' &&<div>
          <Button variant="contained" onClick={props.handleClose} color="primary">
            Dismiss
          </Button>
          {/* <Button variant="contained">Discard Changes</Button> */}
        </div>}
      </form>
      <div style={{'textAlign':'right','paddingTop':'10px'}}>
      <a href="https://getavataaars.com/">avatars</a> by <a href="https://twitter.com/pablostanley">Pablo Stanley</a> and <a href="https://twitter.com/fangpenlin">Fang-Pen Lin</a>
      </div>
    </Paper>
  );
  if(props.variant == 'noModal'){
    return <div>{body}</div>;

  }
  else{
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
          maxWidth="lg"
          // style={{"overflow":"scroll"}}
        >
          {body}
          
        </Modal>
      </div>
    );
  
  }
  }
export default withStyles(styles)(PersonaModal);
