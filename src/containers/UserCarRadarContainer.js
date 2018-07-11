import { connect } from 'react-redux';
import CarRadar from '../components/CarRadar.js';
import {calculateCarWeight,calculateCarCost} from '../components/CarInfo';

function mapStateToProps(state){
    return {
        title: "Current Car",
        labels: ["Material Cost","Engine Power","Weight"],
        values: [calculateCarCost(state.carConfig)/1e5,state.carConfig.eng_power/2e5,calculateCarWeight(state.carConfig)/5e3]
    }
}

export default connect(mapStateToProps)(CarRadar);