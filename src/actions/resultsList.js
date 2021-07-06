export const SET_RESULTS_LIST_SORT = "SET_RESULTS_LIST_SORT";
export const SET_RESULTS_LIST_ORDER = "SET_RESULTS_LIST_ORDER";
export const SET_RESULTS_LIST_DISPLAY = "SET_RESULTS_LIST_DISPLAY";

export const setResultsListSort = (sortKey) => {
    return {
        type: SET_RESULTS_LIST_SORT,
        value: sortKey
    }
}

export const setResultsListOrder = (sortOrder) => {
        return {
                type: SET_RESULTS_LIST_ORDER,
                value: sortOrder
        };

}

export const setResultsListDisplay = (sortKey) => {
    return {
        type: SET_RESULTS_LIST_DISPLAY,
        value: sortKey
    }
}