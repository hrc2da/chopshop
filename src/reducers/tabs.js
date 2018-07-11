const tabs = (state={"top":0,"bottom":0},action)=>{
    switch(action.type){
        case("SET_TAB_TOP"):
            return {...state,"top":action.value};
        case("SET_TAB_BOTTOM"):
            return {...state,"bottom":action.value};
        default:
            return state;
    }

}
export default tabs;