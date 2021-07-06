import { connect } from "react-redux";
import StaticCarSVG from "../components/StaticCarSVG";
import { calculateCarLength, calculateCarWidth } from "../util/carActions";
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';

function mapStateToProps(state, ownProps) {
  let carConfig;
  if (ownProps.carConfig) {
    carConfig = ownProps.carConfig;
  } else {
    carConfig = state.carConfig;
  }
  return {
    carConfig: carConfig,
    height: ownProps.height
      ? ownProps.height
      : state.dimensions.workspaceHeight / 2,
    width: ownProps.width
      ? ownProps.width
      : state.dimensions.workspaceWidth / 2,
    scale: ownProps.scale ? ownProps.scale : 1,
    hullColor: "#" + carConfig.color,
    wheelColor: "black",
    carLength: (calculateCarLength(carConfig) * 0.0254).toFixed(2),
    carWidth: (calculateCarWidth(carConfig) * 0.0254).toFixed(2),
    rotation: ownProps.rotation ? ownProps.rotation : 0
  };
}

export default connect(mapStateToProps)(StaticCarSVG);
