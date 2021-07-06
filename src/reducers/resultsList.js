export const sortResultsOn = (state = "time", action) => {
    switch (action.type) {
        case "SET_RESULTS_LIST_SORT":
            return action.value;
        default:
            return state;
    }
};
export const sortResultsOrder = (state = "descending", action) => {
    switch (action.type) {
        case "SET_RESULTS_LIST_ORDER":
            return action.value;
        default:
            return state;
    }
};

export const sortResultsDisplay = (state = "wheelRadius", action) => {
    switch (action.type) {
        case "SET_RESULTS_LIST_DISPLAY":
            return action.value;
        default:
            return state;
    }
};