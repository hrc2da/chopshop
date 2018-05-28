import { connect } from 'react-redux';
import CostBenefitPlot from '../components/CostBenefitPlot';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    testedCars: state.testedCars,
    gaCars: state.gaCars
    //height: state.dimensions.workspaceHeight/2,
    //width: state.dimensions.workspaceWidth
  }

}

export default connect(mapStateToProps)(CostBenefitPlot);
