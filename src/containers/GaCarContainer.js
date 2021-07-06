import { connect } from "react-redux";
import GaCar from "../components/GaCar";

function mapStateToProps(state) {
  return { gaCarList: state.gaCars };
}

export default connect(mapStateToProps)(GaCar);
