import { connect } from "react-redux";
import CostBenefitPlot from "../components/CostBenefitPlot";
import {
  selectCompCarSession,
  deselectCompCar,
  clearCompCarConfig,
} from "../actions/compCarConfig";

//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  let indices = [];
  if(state.session.tested_designs){
    for(let i=0; i<state.session.tested_designs.length; i++){
      indices.push(i);
    }
  }
  
  return {
    carIndices: indices,
    testedCars: state.session.tested_designs,
    testedRewards: state.session.tested_results,
    gaCars: state.gaCars,
    //height: state.dimensions.workspaceHeight/2,
    //width: state.dimensions.workspaceWidth
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    handleSelectCompCar: (e, type, index) => {
      dispatch(selectCompCarSession(type, index));
    },
    handleClearCompCar: (e) => {
      dispatch(deselectCompCar());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CostBenefitPlot);
