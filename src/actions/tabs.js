export const SET_TAB_TOP = 'SET_TAB_TOP';
export const SET_TAB_BOTTOM = 'SET_TAB_BOTTOM';
export const TAB_TOP = 'TAB_TOP';
export const TAB_BOTTOM = 'TAB_BOTTOM';

export const setTab = (tabbedView,value) =>{
	switch(tabbedView){
        case TAB_TOP:
            return {
                type: SET_TAB_TOP,
                value: value
            }
        case TAB_BOTTOM:
            return {
                type: SET_TAB_BOTTOM,
                value: value
            }
	};
};
