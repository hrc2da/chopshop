import { connect } from 'react-redux';
import Block from '../components/Block';

function mapStateToProps(state) {
  return {
    x_max : state.dimensions ? state.dimensions.workspaceWidth : 0,
    y_max : state.dimensions ? state.dimensions.workspaceHeight : 0,
  }

}

export default connect(mapStateToProps)(Block);
