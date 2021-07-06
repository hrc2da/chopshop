import {connect} from 'react-redux';
import SubmitModal from '../components/SubmitModal';
import {PERSONA_MODAL, setTab } from "../actions/tabs";
import {submitDesign} from "../actions/testDrive";

function mapStateToProps(state) {

    return {
        height: state.dimensions.workspaceHeight,
        width: state.dimensions.workspaceWidth,
        open: state.submitModalOpen,
        avatar: state.persona.avatar,
        keyFeatures: state.session && state.session.final_report ? state.session.final_report["key_features"]: "",
        userNeeds: state.session && state.session.final_report ? state.session.final_report["user_needs"]: "",
        designProcess: state.session && state.session.final_report ? state.session.final_report["design_process"]: "",
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleClose: (e)=>{
            return dispatch({
                type: "SET_SUBMIT_MODAL_OPEN",
                value: false
            })
        },
        handleSubmit: (e)=>{
            return dispatch(submitDesign());
        },
        openPersona: (e)=>{
            dispatch(setTab(PERSONA_MODAL, true));
        },
        handleFormChange: (field, value)=>{
            return dispatch({
                type: "SET_FINAL_REPORT",
                value: {
                    [field] : value
                }
            });
        }
            
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SubmitModal)