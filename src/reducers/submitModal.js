const submitModalOpen = (state=false, action) =>{
    switch(action.type) {
        case "SET_SUBMIT_MODAL_OPEN":
            return action.value;
        default:
            return state;
    }
}

export default submitModalOpen;