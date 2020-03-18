import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
import { testDrive} from '../actions/testDrive';
function mapStateToProps(state){
	return {
		height: state.dimensions.workspaceHeight,
		width: state.dimensions.workspaceWidth,
    carConfig: state.carConfig,
    loading: state.loading.indexOf('testDrive') >= 0
	}

}
function mapDispatchToProps(dispatch){
  return {
    handleTestDrive: (e)=>{
      dispatch(testDrive());
    },
    handleTrainDriver: (e)=>{
      dispatch(testDrive({},true));
    }
  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Workspace)
