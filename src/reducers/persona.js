import {
  SET_AVATAR,
  SET_NAME,
  PERSONA_EXPERIENCE,
  PERSONA_STRENGTHS,
  PERSONA_STRUGGLES,
  PERSONA_SHORT_TERM_GOALS,
  PERSONA_LONG_TERM_GOALS,
  PERSONA_REQUIREMENTS,
} from "../actions/persona";

const persona = (state = {}, action) => {
  switch (action.type) {
    case SET_AVATAR:
      return { ...state, avatar: action.value };
    case SET_NAME:
      return { ...state, name: action.value };
    case PERSONA_EXPERIENCE:
      return { ...state, experience: action.value };
    case PERSONA_STRENGTHS:
      return { ...state, strengths: action.value };
    case PERSONA_STRUGGLES:
      return { ...state, struggles: action.value };
    case PERSONA_SHORT_TERM_GOALS:
      return { ...state, shortGoals: action.value };
    case PERSONA_LONG_TERM_GOALS:
      return { ...state, longGoals: action.value };
    case PERSONA_REQUIREMENTS:
      return { ...state, requirements: action.value };
    default:
      return state;
  }
};

export default persona;
