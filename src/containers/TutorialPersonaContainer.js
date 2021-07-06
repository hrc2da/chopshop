import { connect } from "react-redux";
import PersonaModal from "../components/PersonaModal";
import { setTab, PERSONA_MODAL } from "../actions/tabs";
import { getNewAvatar, setName, setAnswer } from "../actions/persona";

function mapStateToProps(state) {
  return {
    modal_state: state.tabs ? state.tabs.persona_modal : true,
    avatar: state.persona.avatar,
    name: state.persona.name,
    persona: state.persona,
    // persona: state.session.personas[state.session.personas.length-1]
  };
}
function mapDispatchToProps(dispatch) {
  return {
    handleOpen: (e) => {
      return dispatch(setTab(PERSONA_MODAL, true));
    },
    handleClose: (e) => {
      return dispatch(setTab(PERSONA_MODAL, false));
    },
    handleNewAvatar: (e) => {
      return dispatch(getNewAvatar());
    },
    handleChangeName: (e) => {
      return dispatch(setName(e.target.value));
    },
    handleChangeAnswer: (e, question) => {
      return dispatch(setAnswer(question, e.target.value));
    },
    handleSubmit: (e) => {
      e.preventDefault();
      return dispatch();
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonaModal);
