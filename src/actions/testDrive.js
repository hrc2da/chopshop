import {setTab,TAB_TOP, TEST_DRIVE_TAB} from './tabs';

export const SET_TEST_DRIVE_VIDEO = 'SET_TEST_DRIVE_VIDEO';
export const INIT_TEST_DRIVE = 'INIT_TEST_DRIVE';
export const ADD_TESTED_CAR = 'ADD_TESTED_CAR';
export const initTestDrive = (config) =>{
  return {
    type: INIT_TEST_DRIVE,
    value: config
  }
};

export const setTestDriveVideo = (video) =>{
	return {
		type: SET_TEST_DRIVE_VIDEO,
    value: video
	};
};

export const addTestedCar = (config,result,video) =>{
  return {
    type: ADD_TESTED_CAR,
    value: {config: config, result:result, video:video}
  }
};


const callTestDrive = (carConfig,apiUrl,train=false) =>{
  let queryOptions = {
    method: "POST",
    mode: "cors",
    cache: 'no-cache',
    headers: {"content-type": "application/json"},
    body: JSON.stringify(carConfig)
  }
  let requestUri = '';
  if(train==true){
    requestUri = apiUrl + "traindriver";
  }
  else{
    requestUri = apiUrl + "testdrive";
  }
  return dispatch => {
    dispatch(initTestDrive(carConfig)); //signal that you're initiating test drive
    return fetch(requestUri,queryOptions)
    .then(response => {
      let responseObj = response.json();
      return responseObj;
    })
    .then(json => {
      dispatch(setTestDriveVideo(json.video)); //set the video
      //if(train==True){ //I'm not sure if this is right. what would be most useful?
        dispatch(addTestedCar(carConfig,json.result,json.video)); //add the results
        dispatch(setTab(TAB_TOP,TEST_DRIVE_TAB));
      //}
    });
  };
};



export const testDrive = (carConfig = {}, train=false) =>{
  return (dispatch, getState) => {
    return dispatch(callTestDrive(getState().carConfig, getState().carRacingApiUrl,train));
  }
};
