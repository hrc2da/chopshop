import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
function mapStateToProps(state){
	return {
		height: state.dimensions.workspaceHeight,
		width: state.dimensions.workspaceWidth
	}

}

export default connect(mapStateToProps)(Workspace)
