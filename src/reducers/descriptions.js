const designDescriptions = (state = [], action) => {
  switch (action.type) {
    case "SET_DESIGN_DESCRIPTION":
      return [...state, action.value];
    default:
      return state;
  }
};

export default designDescriptions;
