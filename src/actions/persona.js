import getRandomAvatar from "../util/avataroptions";

export const SET_AVATAR = "SET_AVATAR";
export const SET_NAME = "SET_NAME";
export const PERSONA_EXPERIENCE = "PERSONA_EXPERIENCE";
export const PERSONA_STRENGTHS = "PERSONA_STRENGTHS";
export const PERSONA_STRUGGLES = "PERSONA_STRUGGLES";
export const PERSONA_SHORT_TERM_GOALS = "PERSONA_SHORT_TERM_GOALS";
export const PERSONA_LONG_TERM_GOALS = "PERSONA_LONG_TERM_GOALS";
export const PERSONA_REQUIREMENTS = "PERSONA_REQUIREMENTS";

export const getNewAvatar = () => {
  return {
    type: SET_AVATAR,
    value: getRandomAvatar(),
  };
};

export const setName = (name) => {
  return {
    type: SET_NAME,
    value: name,
  };
};

export const setAnswer = (question, value) => {
  return {
    type: question,
    value: value,
  };
};
