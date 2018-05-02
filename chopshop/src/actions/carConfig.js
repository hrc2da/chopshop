
export const WHEEL_SIZE = 'WHEEL_SIZE';
const SET_WHEEL_SIZE = 'SET_WHEEL_SIZE';

export const setConfigVar = (type, value) =>{
  console.log('type: ', type, 'value: ', value);
  switch (type) {
    case WHEEL_SIZE:
      return {
		    type: SET_WHEEL_SIZE,
		    value: parseInt(value)
      };

  }
};
