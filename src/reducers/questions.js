const questions = (state = {}, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return Object.assign({}, state, action.value);
    case "DESIGN_DESCRIPTION":
      return Object.assign({}, state, {"design_description": action.value});
    case "DESIGN_RATIONALE":
      return Object.assign({}, state, {"design_rationale": action.value});
    case "TEST_DRIVE_GOALS":
      return Object.assign({}, state, {"test_drive_goals": action.value});
    case "SAVE_DESIGN_DOC":
      return {"design_description":"", "design_rationale":"", "test_drive_goals":""};
      // return Object.assign({}, state, {"session": action.value});
    default:
      return state;
  }
};

export default questions;
