import { connect } from "react-redux";
import CarInfoCompact from "../components/CarInfoCompact";
import { setConfigVar, ENG_POWER } from "../actions/carConfig";
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    state: state,
    config: state.compCarConfig ? state.compCarConfig : {},
    readOnly: true,
  };
}
function mapDispatchToProps(dispatch){
  return{
    handleSlider: (e)=>{
      return;
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarInfoCompact);
