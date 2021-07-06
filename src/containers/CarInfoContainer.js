import { connect } from "react-redux";
import CarInfo from "../components/CarInfo";
import CarInfoStepper from "../components/CarInfoStepper";
import { setConfigVar, ENG_POWER } from "../actions/carConfig";
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    state: state,
    config: state.carConfig,
    readOnly: false,
    focus: state.tabs ? state.tabs.config_focus : "ENG_POWER",
  };
}
function mapDispatchToProps(dispatch, state) {
  return {
    handleSlider: (e, v, type) => {
      dispatch(setConfigVar(type, v));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarInfoStepper);
