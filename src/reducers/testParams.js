export const numEpisodes = (state = "", action) => {
  switch (action.type) {
    case "SET_NUM_EPISODES":
      return action.value;
    default:
      return state;
  }
};

export const practiceEps = (state=0,  action)=> {
  switch(action.type) {
    case "SET_PRACTICE_EPS":
      return action.value;
    default:
      return state;
  }
}
