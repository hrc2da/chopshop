const carConfig = (state={}, action) =>{
	switch(action.type){
    case 'SET_WHEEL_SIZE':
      return {...state, wheelSize : action.value}; 
    case 'SET_MATERIAL':
      return {...state, material: action.value}; 
    case 'SET_ENGINE':
      return {...state, engine: action.value}; 

      
    case 'CLEAR_WHEEL_SIZE':
      return {...state, wheelSize : undefined};
    case 'CLEAR_MATERIAL':
      return {...state, material : undefined};
    case 'CLEAR_ENGINE':
      return {...state, engine : undefined};
    default:
			return state;
	}

}

export default carConfig;
