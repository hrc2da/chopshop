import {connect} from 'react-redux';
import Completion from '../components/Completion';


function mapStateToProps(state) {

    return {
        display: state.submitted,
        url: "https://cornell.qualtrics.com/surveyid="+state.session.user_id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClose: (e)=>{
            dispatch({
                type: "SET_SUBMITTED",
                value: false
            });
            localStorage.clear(); 
            window.location.reload()
        }

            
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Completion)