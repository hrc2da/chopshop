import { connect } from "react-redux";
import { setViews, ANALYSIS_VIEW, EVAL_VIEW } from "../actions/views";
import VideoScrubber from "../components/VideoScrubber";
function mapStateToProps(state, ownprops) {
  return {
    viewId: state.currentView,
    nextView: (state.currentView + 1) % 3,
    direction: ownprops.direction,
    playerIndex: ownprops.index,
    // videoIndex: state.videos[ownprops.index]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeView: (e, nextView, currentView) => {
      if (nextView == ANALYSIS_VIEW && currentView == EVAL_VIEW) {
        e.preventDefault();
        let answers = {};
        console.log(e);
        let answerNodes = document
          .getElementById("loadingform")
          .getElementsByClassName("MuiInputBase-input");
        for (let i = 0; i < answerNodes.length; i++) {
          if (answerNodes[i].value === "") {
            alert("answer the questions, fool!");
            return;
          }
          answers[answerNodes[i].name] = answerNodes[i].value;
        }
        dispatch({ type: "SET_DESIGN_DESCRIPTION", value: answers });
      }

      return dispatch(setViews(nextView));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoScrubber);
