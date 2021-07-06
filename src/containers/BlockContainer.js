import { connect } from "react-redux";
import Block from "../components/Block";
import { setConfigVar, clearConfigVar } from "../actions/carConfig";
function mapStateToProps(state) {
  return {
    x_max: state.dimensions ? state.dimensions.workspaceWidth : 0,
    y_max: state.dimensions ? state.dimensions.workspaceHeight : 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDrop: (e) => {
      dispatch(
        setConfigVar(
          e.target.getAttribute("type"),
          e.target.getAttribute("value")
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Block);
