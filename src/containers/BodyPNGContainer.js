import { connect } from 'react-redux';
import BodyPNG from '../components/BodyPNG';
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    img: "img/"+state.carConfig.body+"_render.png",
    h: state.dimensions.workspaceHeight/2,
    w: state.dimensions.workspaceWidth
  }

}

export default connect(mapStateToProps)(BodyPNG);
