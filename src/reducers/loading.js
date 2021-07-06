const loading = (state = [], action) => {
  switch (action.type) {
    case "INIT_TEST_DRIVE":
      return [...state, "testDrive"];
    case "SET_TEST_DRIVE_VIDEO":
      //if testDrive is set in loading, find it and remove it
      let tdi = state.indexOf("testDrive");
      if (tdi < 0) {
        return state;
      } else {
        return [...state.slice(0, tdi), ...state.slice(tdi + 1)];
      }
    case "SET_RESULT_READY":
      return [...state, "resultReady"];
    case "CLEAR_RESULT_READY":
      let rri = state.indexOf("resultReady");
      if (rri < 0) {
        return state;
      } else {
        return [...state.slice(0, rri), ...state.slice(rri + 1)];
      }
    default:
      return state;
  }
};



export default loading;
