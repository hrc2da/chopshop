import { connect } from 'react-redux';
import Workspace from '../components/Workspace';
import { testDrive, setNumEpisodes } from '../actions/testDrive';
function mapStateToProps(state){
	return {
		height: state.dimensions.workspaceHeight,
		width: state.dimensions.workspaceWidth,
    carConfig: state.carConfig,
    numEpisodes: state.numEpisodes,
    loading: state.loading.indexOf('testDrive') >= 0
	}

}
function mapDispatchToProps(dispatch){
  return {
    handleNumEpisodes: (e)=>{
      dispatch(setNumEpisodes(e.target.value));
    },
    handleTestDrive: (e)=>{
      dispatch(testDrive({},false));
    },
    handleTrainDriver: (e)=>{
      dispatch(testDrive({},true));
    }
  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Workspace)
