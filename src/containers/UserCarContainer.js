import { connect } from 'react-redux';
import CarSVG from '../components/CarSVG';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    config: state.carConfig,
    h: state.dimensions.workspaceHeight/2,
    w: state.dimensions.workspaceWidth
  }

}

export default connect(mapStateToProps)(CarSVG);
