import {ANALYSIS_OVERVIEW, ANALYSIS_TAKEAWAYS, ANALYSIS_IDEAS} from "../actions/questions";

import {
  SET_AVATAR,
  SET_NAME,
  PERSONA_EXPERIENCE,
  PERSONA_STRENGTHS,
  PERSONA_STRUGGLES,
  PERSONA_SHORT_TERM_GOALS,
  PERSONA_LONG_TERM_GOALS,
  PERSONA_REQUIREMENTS,
} from "../actions/persona";

export const session = (state = {}, action) => {
  switch (action.type) {
    case "SET_SESSION":
      if (action.value == undefined) {
        return state;
      }
      return Object.assign({}, state, action.value);
    case "SAVE_DESIGN_DOC":
      if(state.design_doc){
        return Object.assign({}, state, {"design_doc":[... state.design_doc, action.value]});
      }
      else{
        return Object.assign({}, state, {"design_doc":[action.value]});
      }
    case ANALYSIS_OVERVIEW: {
      if(!state.test_drive_analysis) state.test_drive_analysis = {}
      let vidId = action.value.id;
      let newAnalysis = {};
      if(state.test_drive_analysis[vidId]){
        newAnalysis[vidId] = {... state.test_drive_analysis[vidId], "overview":action.value.answer};
      }
      else{
        newAnalysis[vidId] = {"overview":action.value.answer};
      }
      return Object.assign({}, state, {"test_drive_analysis":{... state.test_drive_analysis, ...newAnalysis}});
    }
    case ANALYSIS_TAKEAWAYS: {
      if(!state.test_drive_analysis) state.test_drive_analysis = {}
      let vidId = action.value.id;
      let newAnalysis = {};
      if(state.test_drive_analysis[vidId]){
        newAnalysis[vidId] = {... state.test_drive_analysis[vidId], "takeaways":action.value.answer};
      }
      else{
        newAnalysis[vidId] = {"takeaways":action.value.answer};
      }      
      return Object.assign({}, state, {"test_drive_analysis":{... state.test_drive_analysis, ...newAnalysis}});
    }
    case ANALYSIS_IDEAS: {
      if(!state.test_drive_analysis) state.test_drive_analysis = {}
      let vidId = action.value.id;
      let newAnalysis = {};
      if(state.test_drive_analysis[vidId]){
        newAnalysis[vidId] = {... state.test_drive_analysis[vidId], "ideas":action.value.answer};
      }
      else{
        newAnalysis[vidId] = {"ideas":action.value.answer};
      }
      return Object.assign({}, state, {"test_drive_analysis":{... state.test_drive_analysis, ...newAnalysis}});
    }
    case "SAVE_NOTE_DIALOG": {
        if(!state.test_drive_analysis) state.test_drive_analysis = {}
        let vidId = action.value.video_id;
        if(!state.test_drive_analysis[vidId]) state.test_drive_analysis[vidId] = {}
        let notelist = state.test_drive_analysis[vidId]['notes'];
        if(notelist){
          return Object.assign({},state,{"test_drive_analysis":{...state.test_drive_analysis, [action.value.video_id]:{...state.test_drive_analysis[action.value.video_id], "notes":[...notelist,{time:action.value.time, text: action.value.note}]}}})
        }
        else{
          return Object.assign({},state,{"test_drive_analysis":{...state.test_drive_analysis, [action.value.video_id]:{...state.test_drive_analysis[action.value.video_id], "notes":[{time:action.value.time, text: action.value.note}]}}})
        }
    }
    case "DELETE_NOTE": {
      let vidId = action.value.video_id;
      let notelist = state.test_drive_analysis[vidId]['notes']
      return Object.assign({}, state, {"test_drive_analysis":{
                                            ...state.test_drive_analysis, 
                                            [action.value.video_id]:{
                                              ...state.test_drive_analysis[action.value.video_id], 
                                              "notes":[...notelist.slice(0, action.value.note_id),
                                                ...notelist.slice(action.value.note_id + 1)]}}});
                                              
    }
    case "SET_FINAL_REPORT": {
      return {...state, "final_report":{...state["final_report"],...action.value}}
    }
    case "EDIT_NOTE": {
      let vidId = action.value.video_id;
      let notelist = state.test_drive_analysis[vidId]['notes']
      let time = notelist[action.value.note_id].time;
      return Object.assign({},state,{"test_drive_analysis":{...state.test_drive_analysis, [action.value.video_id]:{...state.test_drive_analysis[action.value.video_id], "notes":[...notelist.slice(0,action.value.note_id),...notelist.slice(action.value.note_id+1),{time:time, text: action.value.note}]}}})
    }
    case "SET_QUESTIONS": {
      if("driver_design_plan" in action.value){
        return {... state, "driver_design_plan": action.value["driver_design_plan"]}
      }
    }

    case SET_AVATAR:
      return { ...state,  persona: {...state['persona'], avatar: action.value }};
    case SET_NAME:
      return { ...state, persona: {...state['persona'], name: action.value }};
    case PERSONA_EXPERIENCE:
      return { ...state, persona: {...state['persona'], experience: action.value }};
    case PERSONA_STRENGTHS:
      return { ...state, persona: {...state['persona'], strengths: action.value }};
    case PERSONA_STRUGGLES:
      return { ...state, persona: {...state['persona'], struggles: action.value }};
    case PERSONA_SHORT_TERM_GOALS:
      return { ...state, persona: {...state['persona'], shortGoals: action.value }};
    case PERSONA_LONG_TERM_GOALS:
      return { ...state, persona: {...state['persona'], longGoals: action.value }};
    case PERSONA_REQUIREMENTS:
      return { ...state, persona: {...state['persona'], requirements: action.value }};
    default:
      return state;
  }
};
export const userId = (state = "", action) => {
  switch (action.type) {
    case "SET_USER_ID":
      if (action.value == undefined) {
        return state;
      }
      return action.value;
    default:
      return state;
  }
};
