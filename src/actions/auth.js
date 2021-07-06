import { setCarConfig } from "./carConfig";

export const SET_USER_ID = "SET_USER_ID";
export const SET_SESSION = "SET_SESSION";

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    value: userId,
  };
};

export const setSession = (session) => {
  return {
    type: SET_SESSION,
    value: session,
  };
};

const callGetSession = (userId, apiUrl, session) => {
  let queryOptions;
  if(Object.keys(session).length > 0){
    queryOptions = {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId: userId, session: session }),
    };
  }
  else{
    queryOptions = {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userId: userId }),
    };
  }
  
  let requestUri = apiUrl + "session";
  return (dispatch) => {
    return fetch(requestUri, queryOptions)
      .then((response) => {
        let responseObj = response.json();
        let status = response.status;
        if (status != "200") {
          return { error: response.status };
        } else {
          return responseObj;
        }
      })
      .then((response2) => {
        if (response2.error != undefined) {
          // window.location = apiUrl + "error?status=" + response2.error;
        } else {
          dispatch(setUserId(response2.user_id)); //set the video
          dispatch(setSession(response2));
          dispatch(setCarConfig(response2.initial_design));
        }

        // //if(train==True){ //I'm not sure if this is right. what would be most useful?
        // dispatch(addTestedCar(carConfig,json.result,json.video)); //add the results
        // dispatch(setTab(TAB_TOP,TEST_DRIVE_TAB));
        // //}
      });
  };
};

export const getSession = () => {
  return (dispatch, getState) => {
    return dispatch(
      callGetSession(getState().userId, getState().carRacingApiUrl, getState().session)
    );
  };
};
