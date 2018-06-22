export const WHEEL_SIZE = 'WHEEL_SIZE';
export const BODY = 'BODY';
export const DRIVETRAIN = 'DRIVETRAIN';
export const ENGINE = 'ENGINE'
export const ENG_POWER = 'ENG_POWER';
export const WHEEL_RAD='WHEEL_RAD';
export const WHEEL_WIDTH='WHEEL_WIDTH';
export const FRICTION_LIM='FRICTION_LIM';
export const HULL_VERTEX='HULL_VERTEX';


const SET_ENG_POWER = 'SET_ENG_POWER';
const SET_WHEEL_RAD = 'SET_WHEEL_RAD';
const SET_WHEEL_WIDTH='SET_WHEEL_WIDTH';
const SET_FRICTION_LIM='SET_FRICTION_LIM';
const SET_BODY = 'SET_BODY';
const SET_DRIVETRAIN = 'SET_DRIVETRAIN';
const SET_ENGINE = 'SET_ENGINE';
const CLEAR_WHEEL_SIZE = 'CLEAR_WHEEL_SIZE';
const CLEAR_BODY = 'CLEAR_BODY';
const CLEAR_DRIVETRAIN = 'CLEAR_DRIVETRAIN';
const CLEAR_ENGINE = 'CLEAR_ENGINE';
const SET_WHEEL_SIZE = 'SET_WHEEL_SIZE';
const SET_HULL_VERTEX = 'SET_HULL_VERTEX';

export const setConfigVar = (type, value) =>{
  switch (type) {
    case WHEEL_WIDTH:
      return {
        type: SET_WHEEL_WIDTH,
        value: value
      };
    case DRIVETRAIN: 
      return {
        type: SET_DRIVETRAIN,
        value: value
      };
    case FRICTION_LIM: 
      return {
        type: SET_FRICTION_LIM,
        value: value
      };
    case ENG_POWER:
      return {
        type: SET_ENG_POWER,
        value: value
      };
    case WHEEL_RAD:
      return {
        type: SET_WHEEL_RAD,
        value: value
      }
    case HULL_VERTEX:
      return {
        type: SET_HULL_VERTEX,
        polygon: value.polygon,
        index: value.index,
        x: value.x,
        y: value.y
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
