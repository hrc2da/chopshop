import {
  SET_ACTIVE_VIDEOS,
  APPEND_ACTIVE_VIDEO,
  REMOVE_ACTIVE_VIDEO_BY_INDEX,
  REMOVE_ACTIVE_VIDEO_BY_ID,
  SET_SEEKING,
  SET_SEEK_POSITION,
  SET_PLAY,
  TOGGLE_PLAY,
  SET_DURATION
} from "../actions/videos";

export const activeVideoList = (state = [], action) => {
  switch (action.type) {
    case SET_ACTIVE_VIDEOS:
      return action.value;
    case APPEND_ACTIVE_VIDEO:
      // state.push(action.value);
      return [...state, action.value];
    case REMOVE_ACTIVE_VIDEO_BY_INDEX:
      if (action.value < state.length) {
        state.splice(action.value, 1);
        return [
          ...state.slice(0, action.value),
          ...state.slice(action.value + 1),
        ];
      } else {
        return state;
      }
    case REMOVE_ACTIVE_VIDEO_BY_ID:
      let index = state.indexOf(action.value);
      if (index > -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const videoPlayers = (state = {}, action) => {
  switch(action.type){
    case SET_SEEKING:{
        let videoPlayer = state[action.value.video_id];
        if(videoPlayer){
          videoPlayer["seeking"] = action.value.seeking;
        }
        else{
          videoPlayer = {"seeking":action.value.seeking};
        }
        return Object.assign({},state,{...state[action.value.video_id], ...videoPlayer})
    }
    case SET_SEEK_POSITION: {
        let videoPlayer = state[action.value.video_id];
        if(videoPlayer){
          videoPlayer["seekPosition"] = action.value.position;
        }
        else{
          videoPlayer = {"seekPosition":action.value.position};
        }
        let vpState = {}
        vpState[action.value.video_id] = videoPlayer;
        return Object.assign({},state,{...state[action.value.video_id], ...vpState})
      }
    case TOGGLE_PLAY: {
      let videoPlayer = state[action.value];
        if(videoPlayer){
          videoPlayer["playing"] = state[action.value].playing ? false : true;
        }
        else{
          videoPlayer = {"playing":true}; //set playing false by default
        }
        let vpState = {}
        vpState[action.value] = videoPlayer;
        return Object.assign({},state,{...state[action.value], ...vpState});
    }
    case SET_PLAY: {
      let videoPlayer = state[action.value.video_id];
      if(videoPlayer){
        videoPlayer["playing"] = action.value.playing;
      }
      else{
        videoPlayer = {"playing":false};
      }
      let vpState = {}
      vpState[action.value.video_id] = videoPlayer;
      return Object.assign({}, state, {...state[action.value.video_id], ...vpState});
    }
    case SET_DURATION: {
      let videoPlayer = state[action.value.video_id];
      if(videoPlayer){
        videoPlayer["duration"] = action.value.duration;
      }
      else{
        videoPlayer = {"duration":action.value.duration}; //set playing false by default
      }
      let vpState = {}
      vpState[action.value.video_id] = videoPlayer;
      return Object.assign({},state,{...state[action.value.video_id], ...vpState})
    }
    default:
      return state
  }
}

export const videoDialog = (state=-1, action) =>{
  switch(action.type){
    case "OPEN_NOTE_DIALOG":
      return action.value;
    case "CLOSE_NOTE_DIALOG":
      return -1;
    default:
      return -1;
  }
}

export const infoDialog = (state =-1, action) => {
  switch(action.type){
    case "OPEN_INFO_DIALOG":
      return action.value;
    case "CLOSE_NOTE_DIALOG":
      return -1;
    default:
      return -1;
  }
}

export const editingNote = (state = {}, action) => {
  switch(action.type){
    case "OPEN_EDIT_NOTE_DIALOG":
      return action.value;
    case "CLOSE_EDIT_NOTE_DIALOG":
      return {};
    case "EDIT_NOTE":
      return {};
    default:
      return state;
  }
  
}




export const timestampNotes = (state={}, action) =>{
  switch(action.type){
    case "SAVE_NOTE_DIALOG": {
      let notelist = state[action.value.video_id];
      if(notelist){
        return Object.assign({},state,{[action.value.video_id]:[...notelist,{time:action.value.time, text: action.value.note}]})
      }
      else{
        return Object.assign({},state,{[action.value.video_id]:[{time:action.value.time, text: action.value.note}]})
      }
    }
    case "DELETE_NOTE": {
      let notelist = state[action.value.video_id]
      if(notelist){
        if (action.value.note_id < notelist.length) {
          return Object.assign({}, state, {[action.value.video_id]: [
            ...notelist.slice(0, action.value.note_id),
            ...notelist.slice(action.value.note_id + 1),
          ]});
        } else {
          return state;
        }
      } 
    }
    case "EDIT_NOTE": {
      let notelist = state[action.value.video_id];
      let time = notelist[action.value.note_id].time;
      return Object.assign({},state,{[action.value.video_id]:[...notelist.slice(0,action.value.note_id), ...notelist.slice(action.value.note_id+1),{time:time, text: action.value.note}]})
    }
    default:
      return state;
  }
}

export const fullscreenVideo = (state=-1, action) => {
  switch(action.type){
    case "SET_FULLSCREEN_VIDEO":
      return action.value;
    case "CLEAR_FULLSCREEN_VIDEO":
      return -1;
    default:
      return state;
  }
}

export const radarTooltips = (state={}, action) => {
  switch(action.type){
    case "SET_RADAR_TOOLTIP":
      return {...state, [action.value.id]:action.value.text}
    default:
      return state
  }
}