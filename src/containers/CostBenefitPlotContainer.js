import { connect } from 'react-redux';
import CostBenefitPlot from '../components/CostBenefitPlot';
import { selectCompCar, clearCompCarConfig } from '../actions/compCarConfig';

//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
function mapStateToProps(state) {
  return {
    testedCars: state.testedCars,
    gaCars: state.gaCars
    //height: state.dimensions.workspaceHeight/2,
    //width: state.dimensions.workspaceWidth
  }

}

function mapDispatchToProps(dispatch,state){
  return {
    handleSelectCompCar: (e,type,index)=>{
      dispatch(selectCompCar(type,index));
    },
    handleClearCompCar: (e)=>{
      dispatch(clearCompCarConfig());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CostBenefitPlot);
