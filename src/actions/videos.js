export const SET_ACTIVE_VIDEOS = "SET_ACTIVE_VIDEOS";
export const APPEND_ACTIVE_VIDEO = "APPEND_ACTIVE_VIDEO";
export const REMOVE_ACTIVE_VIDEO_BY_INDEX = "REMOVE_ACTIVE_VIDEO_BY_INDEX";
export const REMOVE_ACTIVE_VIDEO_BY_ID = "REMOVE_ACTIVE_VIDEO_BY_ID";
export const SET_SEEKING = "SET_SEEKING";
export const SET_SEEK_POSITION = "SET_SEEK_POSITION";
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const SET_PLAY = "SET_PLAY";
export const SET_DURATION = "SET_DURATION";
export const SET_FULLSCREEN_VIDEO = "SET_FULLSCREEN_VIDEO";
export const CLEAR_FULLSCREEN_VIDEO = "CLEAR_FULLSCREEN_VIDEO";


export const setSeeking = (video_id, value) =>{
  return {
    type: SET_SEEKING,
    value: {
            video_id:video_id, 
            seeking:value
    }
  }
}

export const setSeekPosition = (video_id, value) =>{
  return {
    type: SET_SEEK_POSITION,
    value: {
            video_id: video_id,
            position: value
    }
  }
}

export const togglePlay = (video_id)=>{
  return {
    type: TOGGLE_PLAY,
    value: video_id
  }
}

export const setPlay = (video_id, playing)=>{
  return {
    type: SET_PLAY,
    value: {
      video_id: video_id,
      playing: playing
    }
  }
}

export const setActiveVideos = (action, value) => {
  switch (action) {
    case SET_ACTIVE_VIDEOS:
      return {
        type: SET_ACTIVE_VIDEOS,
        value: value, //an array
      };
    case APPEND_ACTIVE_VIDEO:
      return {
        type: APPEND_ACTIVE_VIDEO,
        value: value, //a video id
      };
    case REMOVE_ACTIVE_VIDEO_BY_INDEX:
      return {
        type: REMOVE_ACTIVE_VIDEO_BY_INDEX,
        value: value, //a video index in the active list
      };
    case REMOVE_ACTIVE_VIDEO_BY_ID:
      return {
        type: REMOVE_ACTIVE_VIDEO_BY_ID,
        value: value, //a video id in the video list
      };
    default:
      return {
        type: SET_ACTIVE_VIDEOS,
        value: value,
      };
  }
};

export const setFullscreenVideo = (on, video_id) => {
  if(on){
    return {
      type: SET_FULLSCREEN_VIDEO,
      value: video_id
    }
  }
  else{
    return {
      type: CLEAR_FULLSCREEN_VIDEO,
      value: video_id
    }
  }
  
}