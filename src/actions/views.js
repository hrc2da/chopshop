export const SET_CURRENT_VIEW = "SET_CURRENT_VIEW";
export const DESIGN_VIEW = 0;
export const EVAL_VIEW = 1;
export const ANALYSIS_VIEW = 2;

export const setViews = (value) => {
  switch (value) {
    case DESIGN_VIEW:
      return {
        type: SET_CURRENT_VIEW,
        value: DESIGN_VIEW,
      };
    case EVAL_VIEW:
      return {
        type: SET_CURRENT_VIEW,
        value: EVAL_VIEW,
      };
    case ANALYSIS_VIEW:
      return {
        type: SET_CURRENT_VIEW,
        value: ANALYSIS_VIEW,
      };
    default:
      return {
        type: SET_CURRENT_VIEW,
        value: DESIGN_VIEW,
      };
  }
};
