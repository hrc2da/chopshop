import { connect } from 'react-redux';
import CarInfo from '../components/CarInfo';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    config: state.carConfig
  }

}

export default connect(mapStateToProps)(CarInfo);
