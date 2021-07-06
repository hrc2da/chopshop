const currentView = (state = 0, action) => {
  switch (action.type) {
    case "SET_CURRENT_VIEW":
      return action.value;
    default:
      return state;
  }
};
export default currentView;
