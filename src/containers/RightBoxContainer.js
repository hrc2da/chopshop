import { connect } from "react-redux";
import { setTab } from "../actions/tabs";
import { setViews, ANALYSIS_VIEW } from "../actions/views";
import { testDrive, clearResultReady, setNumEpisodes, submitDesign, setPracticeEps } from "../actions/testDrive";
import {setDesignDoc, saveDesignDoc} from "../actions/questions";
import RightBox from "../components/RightBox";
function mapStateToProps(state) {
  return {
    height: state.dimensions.workspaceHeight,
    width: state.dimensions.workspaceWidth,
    tabValueTop: state.tabs ? state.tabs.top : 0,
    tabValueBottom: state.tabs ? state.tabs.bottom : 0,
    viewId: state.currentView,
    testDriveProgress: state.testDriveProgress / 5.0,
    practiceProgress: state.practiceProgress, //10*n_samples*pop_size/update_freq, get state variables for those
    loading: state.loading.indexOf("testDrive") >= 0,
    resultReady: state.loading.indexOf("resultReady") >= 0,
    questions: state.questions,
    practiceChecked: state.practiceEps > 0,
    nTestDrives: (state.session && state.session.tested_results) ? state.session.tested_results.length : 0,
    testDriveLimit: (state.session && state.session.test_drive_limit) ? state.session.test_drive_limit : 0
    // questions: state.questions ? state.questions: {},
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleSwitchTab: (e, tabbedView, value) => {
      return dispatch(setTab(tabbedView, value));
    },
    handleTestDrive: (e) => {
      dispatch(testDrive({}, false));
    },
    handleChangeView: (e, value) => {
      if (value == ANALYSIS_VIEW) {
        e.preventDefault();
        let answers = {};
        console.log(e);
        let answerNodes =
          e.currentTarget.form.getElementsByClassName("MuiInputBase-input");
        for (let i = 0; i < answerNodes.length; i++) {
          // if (answerNodes[i].value === "") {
          //   alert("answer the questions, fool!");
          //   return;
          // }
          answers[answerNodes[i].name] = answerNodes[i].value;
        }
        dispatch({ type: "SET_DESIGN_DESCRIPTION", value: answers });
      }
      return dispatch(setViews(value));
    },
    handleSubmitDesign: () => {
      return;
    },
    handleSubmitRationale: (e) => {
      e.preventDefault();
      dispatch(saveDesignDoc());
      dispatch(clearResultReady());
      return dispatch(setViews(ANALYSIS_VIEW));
    },
    handleChangeRationale: (e,question) => {
      return dispatch(setDesignDoc(question,e.target.value));
    },
    handlePractice: (e) => {
      if(e.target.checked){
        dispatch(setPracticeEps(2));
      }
      else{
        dispatch(setPracticeEps(0));
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBox);
