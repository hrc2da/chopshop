export const WHEEL_SIZE = 'WHEEL_SIZE';
export const BODY = 'BODY';
export const DRIVETRAIN = 'DRIVETRAIN';
export const ENGINE = 'ENGINE';

const SET_WHEEL_SIZE = 'SET_WHEEL_SIZE';
const SET_BODY = 'SET_BODY';
const SET_DRIVETRAIN = 'SET_DRIVETRAIN';
const SET_ENGINE = 'SET_ENGINE';
const CLEAR_WHEEL_SIZE = 'CLEAR_WHEEL_SIZE';
const CLEAR_BODY = 'CLEAR_BODY';
const CLEAR_DRIVETRAIN = 'CLEAR_DRIVETRAIN';
const CLEAR_ENGINE = 'CLEAR_ENGINE';

export const setConfigVar = (type, value) =>{
  switch (type) {
    case WHEEL_SIZE:
      return {
        type: SET_WHEEL_SIZE,
        value: parseInt(value)
      };
    case BODY: 
      return {
        type: SET_BODY,
        value: value
      };
    case DRIVETRAIN: 
      return {
        type: SET_DRIVETRAIN,
        value: value
      };
    case ENGINE: 
      return {
        type: SET_ENGINE,
        value: value
      };


  }
};
export const removeConfigVar = (type, value) =>{
  switch (type) {
    case WHEEL_SIZE:
      return {
        type: CLEAR_WHEEL_SIZE,
        value: undefined
      };
    case BODY: 
      return {
        type: CLEAR_BODY,
        value: undefined
      };
    case DRIVETRAIN: 
      return {
        type: CLEAR_DRIVETRAIN,
        value: undefined
      };
    case ENGINE: 
      return {
        type: CLEAR_ENGINE,
        value: undefined
      };
  }
};
