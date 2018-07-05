import { connect } from 'react-redux';
import CarInfo from '../components/CarInfo';
import { setConfigVar, ENG_POWER } from '../actions/carConfig';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    state: state,
    config: state.carConfig,
    readOnly: false
  }
}
function mapDispatchToProps(dispatch,state){
  return{
    handleSlider: (e,v,type)=>{dispatch(setConfigVar(type,v));}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CarInfo);
