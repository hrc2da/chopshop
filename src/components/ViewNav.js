import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AssessmentIcon from "@material-ui/icons/Assessment";
import BuildIcon from "@material-ui/icons/Build";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import ArrowLeft from "@material-ui/icons/ArrowLeft";
import ArrowRight from "@material-ui/icons/ArrowRight";
import Typography from "@material-ui/core/Typography";

let ViewNav = (props) => {
  let navButton;
  console.log(props);
  switch (props.viewId) {
    case 0:
      if (props.direction == "right") {
        navButton = (
          <React.Fragment>
            <Button
              variant="contained"
              onClick={props.openSubmitModal}
            >
            <CloudDoneIcon 
            />
              Finalize
              
            </Button>
            <Button
              variant="contained"
              onClick={(e) =>
                props.handleChangeView(e, props.nextView, props.viewId)
              }
            >
              Test Drive
              <PlayCircleFilledIcon />
              {/* <ArrowRight /> */}
            </Button>
            {/* <Typography variant="p">Test Drive</Typography> */}
          </React.Fragment>
        );
      } else {
        navButton = (
          <React.Fragment>
            <Button
              variant="contained"
              onClick={(e) =>
                props.handleChangeView(e, (props.viewId + 2) % 3, props.viewId)
              }
            >
              {/* <ArrowLeft /> */}
              <AssessmentIcon />
              View Results
            </Button>
            {/* <Typography variant="p">View Results</Typography> */}
          </React.Fragment>
        );
      }

      break;
    case 1:
      console.log(props.loading);
      if (props.direction == "right") {
        navButton = (
          <React.Fragment>
            <Button
              variant="contained"
              onClick={(e) =>
                props.handleChangeView(e, props.nextView, props.viewId)
              }
              disabled = {props.loading || props.resultReady}
      
            >
              See Results
              <AssessmentIcon />
            </Button>
          </React.Fragment>
        );
      } else {
        navButton = (
          <React.Fragment>
            <Button
              variant="contained"
              onClick={(e) =>
                props.handleChangeView(e, (props.viewId + 2) % 3, props.viewId)
              }
              disabled = {props.loading || props.resultReady}
            >
              <BuildIcon />
              Design View
            </Button>
          </React.Fragment>
        );
      }

      break;
    case 2:
      if (props.direction == "right") {
        navButton = (
          <React.Fragment>
            <Button
              variant="contained"
              onClick={(e) =>
                props.handleChangeView(e, props.nextView, props.viewId)
              }
            >
              Design View
              <BuildIcon />
            </Button>
          </React.Fragment>
        );
      } else {
        navButton = null;
      }

      break;
  }

  return <React.Fragment>{navButton}</React.Fragment>;
};
export default ViewNav;
