import { connect } from 'react-redux';
import CarInfoCompact from '../components/CarInfoCompact';
import { setConfigVar, ENG_POWER } from '../actions/carConfig';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    state: state,
    config: state.compCarConfig ? state.compCarConfig.config : {},
    readOnly: true
  }
}


export default connect(mapStateToProps)(CarInfoCompact);
