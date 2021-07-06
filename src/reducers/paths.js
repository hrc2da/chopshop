export const carRacingUrl = (state = "", action) => {
  switch (action.type) {
    case "SET_CAR_RACING_URL":
      return action.value;
    case "CLEAR_CAR_RACING_URL":
      return undefined;
    default:
      return state;
  }
};

export const carRacingStaticUrl = (state = "", action) => {
  switch (action.type) {
    case "SET_CAR_RACING_STATIC_URL":
      return action.value;
    case "CLEAR_CAR_RACING_STATIC_URL":
      return undefined;
    default:
      return state;
  }
};

export const carRacingApiUrl = (state = "", action) => {
  switch (action.type) {
    case "SET_CAR_RACING_API_URL":
      return action.value;
    case "CLEAR_CAR_RACING_API_URL":
      return undefined;
    default:
      return state;
  }
};

export const testDriveVideo = (state = "", action) => {
  switch (action.type) {
    case "SET_TEST_DRIVE_VIDEO":
      return action.value;
    case "CLEAR_TEST_DRIVE_VIDEO":
      return undefined;
    default:
      return state;
  }
};

export const testDriveVideoVae = (state = "", action) => {
  switch (action.type) {
    case "SET_TEST_DRIVE_VIDEO_VAE":
      return action.value;
    case "CLEAR_TEST_DRIVE_VIDEO_VAE":
      return undefined;
    default:
      return state;
  }
};

export const testDriveVideoMdrnn = (state = "", action) => {
  switch (action.type) {
    case "SET_TEST_DRIVE_VIDEO_MDRNN":
      return action.value;
    case "CLEAR_TEST_DRIVE_VIDEO_MDRNN":
      return undefined;
    default:
      return state;
  }
};

export const statsPlotPath = (state = "", action) => {
  switch (action.type) {
    case "SET_STATS_PLOT_PATH":
      return action.value;
    case "CLEAR_STATS_PLOT_PATH":
      return "";
    default:
      return state;
  }
};

export const testDriveVideoArray = (state = "", action) => {
  switch (action.type) {
    case "SET_TEST_DRIVE_VIDEO_ARRAY":
      return action.value;
    case "CLEAR_TEST_DRIVE_VIDEO_ARRAY":
      return undefined;
    default:
      return state;
  }
};

export const testDriveVideoCounter = (state = 0, action) => {
  switch (action.type) {
    case "SET_TEST_DRIVE_VIDEO_COUNTER":
      return action.value;
    case "INCREMENT_TEST_DRIVE_VIDEO_COUNTER":
      return state + 1;
    case "DECREMENT_TEST_DRIVE_VIDEO_COUNTER":
      return state > 0 ? state - 1 : 0;
    case "CLEAR_TEST_DRIVE_VIDEO_COUNTER":
      return 0;
    default:
      return state;
  }
};

export const testDriveProgress = (state = 0, action) => {
  switch (action.type) {
    case "SET_TEST_DRIVE_PROGRESS":
      if(action.value){
        return action.value;
      }
      else{
        return state;
      }
      
    default:
      return state;
  }
};

export const practiceProgress = (state = 0, action) => {
  switch (action.type) {
    case "SET_PRACTICE_PROGRESS":
      if(action.value){
        return action.value;
      }
      else{
        return state;
      }
    case "INCREMENT_PRACTICE_PROGRESS":
      return state + 1;
    default:
      return state;
  }
};

export const submitted = (state=false, action)=>{
  switch(action.type) {
    case 'SET_SUBMITTED':
      return action.value;
    default:
      return state;
  }
}