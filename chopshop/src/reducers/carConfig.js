const carConfig = (state={}, action) =>{
	switch(action.type){
    case 'SET_WHEEL_SIZE':
      return {...state, wheelSize: action.value}; 
    case 'SET_MATERIAL':
      return {...state, material: action.value}; 
    case 'SET_ENGINE':
      return {...state, engine: action.value};
    case 'SET_BODY':
      return {...state, body: action.value};
    case 'SET_DRIVETRAIN':
      return{...state, drivetrain: action.value};
    case 'SET_WHEEL_DIST':
      return {...state, wheelDistance: action.value};

      
    case 'CLEAR_WHEEL_SIZE':
      return {...state, wheelSize : undefined};
    case 'CLEAR_MATERIAL':
      return {...state, material : undefined};
    case 'CLEAR_ENGINE':
      return {...state, engine : undefined};
    case 'CLEAR_BODY':
      return {...state, body : undefined};
    case 'CLEAR_DRIVETRAIN':
      return {...state, drivetrain : undefined};
    case 'CLEAR_WHEEL_DIST':
      return {...state, drivetrain : undefined};
    default:
			return state;
	}

}

export default carConfig;
