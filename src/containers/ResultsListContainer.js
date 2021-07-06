import { connect } from "react-redux";
import { setActiveVideos,  APPEND_ACTIVE_VIDEO, REMOVE_ACTIVE_VIDEO_BY_ID } from "../actions/videos";
import {setResultsListSort, setResultsListOrder, setResultsListDisplay} from "../actions/resultsList";
import ResultsList from "../components/ResultsList";
import { calculateCarWeight, calculateCarCost } from "../util/carActions";
function mapStateToProps(state, ownprops) {
  let vaeVids = state.session.tested_videos.map((vid) => {
    let parts = vid.split("/");
    return parts[0] + "/" + parts[1] + "/vae" + parts[2];
  });
  let ids = [];
  let testedDesigns = [];
  for (let i = 0; i < state.session.tested_videos.length; i++) {
    ids.push(i);
    let augmentedDesign = Object.assign({}, state.session.tested_designs[i]);
    augmentedDesign["time"] = i;
    augmentedDesign["weight"] = calculateCarWeight(state.session.tested_designs[i]);
    augmentedDesign["cost"] = calculateCarCost(state.session.tested_designs[i]);
    augmentedDesign["reward"] = state.session.tested_results[i];
    augmentedDesign["eng_power"] = state.session.tested_designs[i]["eng_power"]/1000;
    augmentedDesign["friction_lim"] = state.session.tested_designs[i]["friction_lim"]/100;
    testedDesigns.push(augmentedDesign);
  }

  return {
    designIds: ids.sort((a,b)=>{
      if(state.sortResultsOrder == "descending"){
        let c = a;
        a = b;
        b = c;
      }
      switch(state.sortResultsOn){
        case "time":
          return a-b;
        case "wheelRadius":
          return testedDesigns[a]["wheel_rad"] - testedDesigns[b]["wheel_rad"];
        case "wheelWidth":
          return testedDesigns[a]["wheel_width"] - testedDesigns[b]["wheel_width"];
        case "tireTread":
          return testedDesigns[a]["friction_lim"] - testedDesigns[b]["friction_lim"];
        case "engineHorsepower":
          return testedDesigns[a]["eng_power"] - testedDesigns[b]["eng_power"];
        case "brakeSensitivity":
          return testedDesigns[a]["brake_scalar"] - testedDesigns[b]["brake_scalar"];
        case "steeringSensitivity":
          return testedDesigns[a]["steering_scalar"] - testedDesigns[b]["steering_scalar"];
        case "rearSteeringSensitivity":
          return testedDesigns[a]["rear_steering_scalar"] - testedDesigns[b]["rear_steering_scalar"];
        case "speedLimiter":
          return testedDesigns[a]["max_speed"] - testedDesigns[b]["max_speed"];
        case "color":
          return testedDesigns[a]["color"] - testedDesigns[b]["color"];
        case "weight":
          return testedDesigns[a]["weight"] - testedDesigns[b]["weight"];
        case "cost":
          return testedDesigns[a]["cost"] - testedDesigns[b]["cost"];
        case "reward":
          return state.session.tested_results[a] - state.session.tested_results[b];
        default:
          return a-b;
      }
    }),
    sortResultsDisplay: state.sortResultsDisplay,
    sortResultsOn: state.sortResultsOn,
    sortResultsOrder: state.sortResultsOrder,
    testedDesigns: testedDesigns,
    testedRewards: state.session.tested_results,
    testedVideos: vaeVids,
    activeVideos: state.activeVideoList,
    radarTooltips: state.radarTooltips ? state.radarTooltips : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeDisplayKey: (e) => {
      return dispatch(setResultsListDisplay(e.target.value));
    },
    handleChangeSort: (e) => {
      return dispatch(setResultsListSort(e.target.value));
    },
    handleChangeSortOrder: (e, order, key) => {
      console.log(order);
      return Promise.resolve(dispatch(setResultsListSort(key))).then(
        ()=> dispatch(setResultsListOrder(order, key))
      );
    },
    handleSelectVideo: (video_id,selected) => {
      if(selected){
        return dispatch(setActiveVideos(REMOVE_ACTIVE_VIDEO_BY_ID, video_id));
      }
      else{
        return dispatch(setActiveVideos(APPEND_ACTIVE_VIDEO, video_id));
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
