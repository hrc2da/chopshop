export const SAVE_DESIGN_DOC = "SAVE_DESIGN_DOC";
export const DESIGN_DESCRIPTION = "DESIGN_DESCRIPTION";
export const DESIGN_RATIONALE = "DESIGN_RATIONALE";
export const TEST_DRIVE_GOALS = "TEST_DRIVE_GOALS";
export const PERSONA_SHORT_TERM_GOALS = "PERSONA_SHORT_TERM_GOALS";
export const PERSONA_LONG_TERM_GOALS = "PERSONA_LONG_TERM_GOALS";
export const PERSONA_REQUIREMENTS = "PERSONA_REQUIREMENTS";
export const ANALYSIS_OVERVIEW = "ANALYSIS_OVERVIEW";
export const ANALYSIS_TAKEAWAYS = "ANALYSIS_TAKEAWAYS";
export const ANALYSIS_IDEAS = "ANALYSIS_IDEAS"

export const setDesignDoc = (prompt, value) => {
  return {
    type: prompt,
    value: value,
  };
};

export const setAnalysis = (prompt, id, answer) => {
  return {
    type: prompt,
    value: {"id": id, "answer": answer} ,
  };
};

export const saveDesignDoc = () => {
    return (dispatch, getState) =>
    {
        let keys = ["design_description", "design_rationale", "test_drive_goals"];
        let questions = getState().questions;
        let designDoc = Object.fromEntries(Object.entries(questions).filter(([k,v]) => keys.indexOf(k)>= 0));
        designDoc["id"] = getState().session.tested_designs.length; //is this safe??
        dispatch(
            {
                type: SAVE_DESIGN_DOC,
                value: designDoc
            }
        )
    }
}