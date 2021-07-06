import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Modal from "@material-ui/core/Modal";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HelpIcon from "@material-ui/icons/Help";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from "@material-ui/core/Fab";
import logo from "./logo.svg";
import { VIDEO_MODAL, PERSONA_MODAL, setTab } from "./actions/tabs";
import "./App.css";

// import ViewspaceContainer from './containers/ViewspaceContainer';
// import WorkspaceContainer from './containers/WorkspaceContainer';
import RightBoxContainer from "./containers/RightBoxContainer";
import LeftBoxContainer from "./containers/LeftBoxContainer";
import VideoModalContainer from "./containers/VideoModalContainer";
import PersonaModalContainer from "./containers/PersonaModalContainer";
import SubmitModalContainer from "./containers/SubmitModalContainer";
import CompletionContainer from "./containers/CompletionContainer";

import { setWorkspaceWidth } from "./actions/dimensions.js";
import ViewNavContainer from "./containers/ViewNavContainer";
import VideoFullScreenContainer from "./containers/VideoFullScreenContainer";



class App extends Component {
  resize(props) {
    console.log("matt", this);
    let docWidth = document.getElementById("workspace").clientWidth;
    props.resize(docWidth);
  }
  componentDidMount() {
    this.resize(this.props);
    window.addEventListener("resize", () => this.resize(this.props));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", () => this.resize(this.props));
  }
  render() {
    return (
      <div className="App">
        <VideoModalContainer />
        <VideoFullScreenContainer />
        <PersonaModalContainer />
        <SubmitModalContainer />
        <CompletionContainer />
        <AppBar position="static" style={{ marginBottom: 20 }}>
          <Toolbar>
            <ViewNavContainer direction={"left"} />
            <IconButton
                onClick={(e) => this.props.handleOpenModal(PERSONA_MODAL)}
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              onClick={(e) => this.props.handleOpenModal(VIDEO_MODAL)}
            >
              <HelpIcon />
            </IconButton>
            <Tooltip
              title="Log Out"
            >
              <IconButton
                onClick = {(e)=>this.props.setPromptLogout(true)}
                // onClick={(e)=> {localStorage.clear(); window.location.reload()}}
              >
                <ExitToAppIcon />
              </IconButton>
            </Tooltip>
            <Modal
              open={this.props.promptLogout}
              onClose = {(e)=>this.props.setPromptLogout(false)}
            >
              <Paper>
                <div>
                  <Typography variant="h6">
                  Clear your session and start over? You will lose all your designs, notes, and videos.
                  </Typography>
                  </div>
                  <div>
                  <Button
                    onClick={(e)=>{localStorage.clear(); window.location.reload()}}
                  >Clear Session</Button>
                  <Button
                    onClick = {(e)=>this.props.setPromptLogout(false)}
                  >Cancel</Button>
                  </div>
              </Paper>            
            </Modal>

            <Typography
              style={{
                color: "white",
                "font-family": "Racing Sans One",
                margin: "auto",
              }}
              variant="h3"
            >
              The ChopShop Garage
            </Typography>
            {/* <Fab variant="extended">
					Test Drive
					<PlayCircleFilledIcon />
				</Fab> */}
            {/* <Button variant="contained" style={{"color":"white", "background-color":"black"}}>Info</Button>
				<Button variant="contained" style={{"color":"white", "background-color":"black"}} disabled>Finalize Design</Button> */}
            {/* <Button variant="contained" style={{"color":"white", "background-color":"black"}}>Test Drive <PlayCircleFilledIcon /></Button> */}
            <ViewNavContainer direction={"right"} />
          </Toolbar>
        </AppBar>
        <Grid container spacing={1}>
          {/* <Grid item xs={1}> */}
            {/* <ViewNavContainer direction = {"left"} /> */}
          {/* </Grid> */}
          <Grid item xs={6}>
            <LeftBoxContainer />
          </Grid>

          <Grid item xs={6}>
            <RightBoxContainer />
          </Grid>
          {/* <Grid item xs={1}> */}
            {/* <ViewNavContainer direction = {"right"} /> */}
          {/* </Grid> */}
        </Grid>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    resize: (width) => dispatch(setWorkspaceWidth(width)),
    handleOpenModal: (modal) => {
      dispatch(setTab(modal, true));
    },
    setPromptLogout: (value) => {
      dispatch({
        type: "SET_PROMPT_LOGOUT",
        value: value
      })
    }
  };
}
function mapStateToProps(state) {
  return {promptLogout: state.tabs.promptLogout};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
