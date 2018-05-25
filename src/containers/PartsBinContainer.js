import { connect } from 'react-redux';
import PartsBin from '../components/PartsBin';

function mapStateToProps(state) {
  return {partList : state.partList};
}

export default connect(mapStateToProps)(PartsBin);
