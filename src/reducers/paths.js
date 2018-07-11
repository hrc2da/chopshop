export const carRacingUrl= (state="", action) =>{
	switch(action.type){
		case 'SET_CAR_RACING_URL':
			return action.value;
		case 'CLEAR_CAR_RACING_URL':
			return undefined; 
		default:
			return state;
	}

}

export const carRacingStaticUrl = (state="",action) =>{
	switch(action.type){
		case 'SET_CAR_RACING_STATIC_URL':
			return action.value;
		case 'CLEAR_CAR_RACING_STATIC_URL':
			return undefined;
		default:
			return state;
	}
}

export const carRacingApiUrl = (state="",action) =>{
	switch(action.type){
		case 'SET_CAR_RACING_API_URL':
			return action.value;
		case 'CLEAR_CAR_RACING_API_URL':
			return undefined;
		default:
			return state;
	}
}

export const testDriveVideo = (state="",action) =>{
	switch(action.type){
		case 'SET_TEST_DRIVE_VIDEO':
			return action.value;
		case 'CLEAR_TEST_DRIVE_VIDEO':
			return undefined;
		default:
			return state;
	}
}

