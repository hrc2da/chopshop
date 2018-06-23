import { connect } from 'react-redux';
import CarSVG from '../components/CarSVG';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    config: state.compCarConfig ? {...state.compCarConfig.config, "hull_densities":[0.3,0.3,0.3,0.3], "friction_lim":100} : {},
    height: state.dimensions.workspaceHeight,
    width: state.dimensions.workspaceWidth,
    hullColor: "black",
    wheelColor: "black"
  }

}

export default connect(mapStateToProps)(CarSVG);
