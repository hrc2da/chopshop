import { setTab, TAB_BOTTOM, TEST_DRIVE_TAB } from "./tabs";
import { browserHistory } from "react-router-redux";
import { setSession } from "./auth";
import { setActiveVideos, SET_ACTIVE_VIDEOS } from "./videos";

export const SET_PRACTICE_PROGRESS = "SET_PRACTICE_PROGRESS";
export const INCREMENT_PRACTICE_PROGRESS = "INCREMENT_PRACTICE_PROGRESS";
export const SET_TEST_DRIVE_VIDEO = "SET_TEST_DRIVE_VIDEO";
export const INIT_TEST_DRIVE = "INIT_TEST_DRIVE";
export const ADD_TESTED_CAR = "ADD_TESTED_CAR";
export const SET_NUM_EPISODES = "SET_NUM_EPISODES";
export const SET_TEST_DRIVE_PROGRESS = "SET_TEST_DRIVE_PROGRESS";
export const INCREMENT_TEST_DRIVE_VIDEO_COUNTER =
  "INCREMENT_TEST_DRIVE_VIDEO_COUNTER";
export const DECREMENT_TEST_DRIVE_VIDEO_COUNTER =
  "DECREMENT_TEST_DRIVE_VIDEO_COUNTER";
export const SET_RESULT_READY = "SET_RESULT_READY";
export const CLEAR_RESULT_READY = "CLEAR_RESULT_READY";
export const SET_PRACTICE_EPS = "SET_PRACTICE_EPS";
export const initTestDrive = (config) => {
  return {
    type: INIT_TEST_DRIVE,
    value: config,
  };
};

export const setResultReady = () => {
  return {
    type: SET_RESULT_READY,
    value: null
  }
}

export const clearResultReady = () => {
  return {
    type: CLEAR_RESULT_READY,
    value: null
  }
}

export const setTestDriveVideo = (video) => {
  return {
    type: SET_TEST_DRIVE_VIDEO,
    value: video,
  };
};

export const addTestedCar = (config, result, video) => {
  return {
    type: ADD_TESTED_CAR,
    value: { config: config, result: result, video: video },
  };
};

export const setPracticeEps = (eps) => {
    return {
      type: SET_PRACTICE_EPS,
      value: eps
    }
}

const callTestDrive = (userId, carConfig, apiUrl, practiceEps, session, getState) => {
  let queryOptions;
  if(Object.keys(session).length > 0){
    queryOptions = {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ 
        config: carConfig,
        practiceEps: practiceEps,
        userId: userId,
        session: session }),
    };
  }
  else{
      queryOptions = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        config: carConfig,
        practiceEps: practiceEps,
        userId: userId,
      }),
    }
  };
  let requestUri = apiUrl + "testdrive";
  return (dispatch) => {
    dispatch(setTab(TAB_BOTTOM, TEST_DRIVE_TAB));
    dispatch(setPracticeProgress(0));
    dispatch(setTestDriveProgress(0));
    dispatch(initTestDrive(carConfig)); //signal that you're initiating test drive
    return fetch(requestUri, queryOptions)
      .then((response) => {
        let responseObj = response.json();
        return responseObj;
      })
      .then((json) => {
        dispatch(
          setTestDriveVideo(
            json.session.tested_videos[json.session.tested_videos.length - 1]
          )
        ); //set the video
        //if(train==True){ //I'm not sure if this is right. what would be most useful?
        dispatch(
          addTestedCar(
            carConfig,
            json.session.tested_results[json.session.tested_results.length - 1],
            json.session.tested_videos[json.session.tested_videos.length - 1]
          )
        ); //add the results
        return dispatch(setSession(json.session));
      })
      .then(() => {
        let state = getState();
        let numTestVideos = state.session.tested_videos.length; //we'll use this to index the video array after adding a new vid
        dispatch(setActiveVideos(SET_ACTIVE_VIDEOS, [numTestVideos - 1]));
        dispatch(setPracticeProgress(0));
        dispatch(setTestDriveProgress(0));
        dispatch(setResultReady());
        //}
      });
  };
};

const callSubmitDesign = (userId, carConfig, questions, features, apiUrl, session) => {
  let queryOptions = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      config: carConfig,
      userId: userId,
      questions: questions,
      selectedFeatures: features,
      session: session
    }),
  };
  let requestUri = apiUrl + "submitdesign";
  return (dispatch) => {
    return fetch(requestUri, queryOptions)
      .then((response) => {
        let responseObj = response.json();
        return responseObj;
      })
      .then((json) => {
        if (json.success == true) {
          // window.location = apiUrl + "success";
          dispatch({
            type: "SET_SUBMIT_MODAL_OPEN",
            value: false
        })
          return dispatch({
            type: "SET_SUBMITTED",
            value: true
          });
        } else {
          console.log(json);
          alert("There was a problem with your submission: " + json.error);
        }
      });
  };
};

export const setTestDriveProgress = (progress) => {
  return {
    type: SET_TEST_DRIVE_PROGRESS,
    value: progress,
  };
};

export const incrementPracticeProgress = (progress) => {
  return {
    type: INCREMENT_PRACTICE_PROGRESS,
    value: progress,
  };
};

export const setPracticeProgress = (progress) => {
  return {
    type: SET_PRACTICE_PROGRESS,
    value: progress,
  };
}


export const testDrive = (carConfig = {}, train = true) => {
  let numEpisodes = 0;

  return (dispatch, getState) => {

    let state = getState();
    return dispatch(
      callTestDrive(
        state.userId,
        state.carConfig,
        state.carRacingApiUrl,
        state.practiceEps,
        state.session,
        getState
      )
    );
  };
};

export const submitDesign = (carConfig = {}) => {
  return (dispatch, getState) => {
    let state = getState();
    return dispatch(
      callSubmitDesign(
        state.userId,
        state.carConfig,
        state.questions,
        state.selectedFeatures,
        state.carRacingApiUrl,
        state.session
      )
    );
  };
};

export const setNumEpisodes = (value) => {
  return {
    type: SET_NUM_EPISODES,
    value: value,
  };
};

export const incrementTestDriveVideoCounter = () => {
  return {
    type: INCREMENT_TEST_DRIVE_VIDEO_COUNTER,
  };
};

export const decrementTestDriveVideoCounter = () => {
  return {
    type: DECREMENT_TEST_DRIVE_VIDEO_COUNTER,
  };
};
