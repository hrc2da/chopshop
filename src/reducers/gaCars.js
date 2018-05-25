const gaCars = (state=[], action) =>{
	switch(action.type){
		case 'ADD_GA_CAR':
			return [...state,  action.newCar];
		case 'CLEAR_GA_CARS':
			return [];
		default:
			return state;
	}

}

export default gaCars;
