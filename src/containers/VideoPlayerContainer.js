import { connect } from "react-redux";
import {setSeekPosition, setSeeking, togglePlay, setPlay, SET_DURATION} from "../actions/videos";
//import { setConfigVar, clearConfigVar } from '../actions/carConfig';
import VideoPlayer from "../components/VideoPlayer";
function mapStateToProps(state, ownProps) {
  let vaepath = "";
  if (ownProps.testDriveVideo) {
    if(ownProps.testDriveVideo.includes('vae')){
      vaepath = ownProps.testDriveVideo;
    }
    else{
      let parts = ownProps.testDriveVideo.split("/");
      vaepath = parts[0] + "/" + parts[1] + "/vae" + parts[2];
    }
    
  } else if (state.testDriveVideo) {
    let parts = state.testDriveVideo.split("/");
    vaepath = parts[0] + "/" + parts[1] + "/vae" + parts[2];
  }
  let video_id = 'video_id' in ownProps ? ownProps.video_id : undefined;
  console.log(video_id);
  let playing = false;
  let played = 0;
  let duration = 0;
  if(video_id != undefined && state.videoPlayers[video_id]){
    playing = state.videoPlayers[video_id].playing;
    if(playing==undefined){
      playing = false;
    }
    duration = state.videoPlayers[video_id].duration;
    if(duration == undefined){
      duration = 0;
    }
    played = state.videoPlayers[video_id].seekPosition;
    console.log(state.videoPlayers[video_id]);
    if(played == undefined){
      played = 0;
    }
  }
  console.log("Path: ", state.carRacingStaticUrl + vaepath)
  let editDialogOpen = false;
  let editingNote = undefined;
  let editingNoteId = -1;
  if(state.editingNote && Object.keys(state.editingNote).length === 2 && 'note_id' in state.editingNote){
    console.log("LDFJLSDFJKLSD");
    console.log(video_id);
    if(state.editingNote.video_id === video_id){
      editDialogOpen = true;
      editingNote = state.session.test_drive_analysis[video_id].notes[state.editingNote.note_id];
      editingNoteId = state.editingNote.note_id;
    }
  }
  let carInfo = {};
  if(video_id && video_id[0]=="t"){
    carInfo = "tutorial";
  }
  else{
    if(state.session && state.session.design_doc && state.session.design_doc[video_id]){
      carInfo = state.session.design_doc[video_id]
    }
    else{
      carInfo = "none";
    }
  }

  console.log("playing: ",playing)
  return {
    path: state.carRacingStaticUrl + vaepath,
    loading: state.loading.indexOf("testDrive") >= 0,
    video_id: video_id,
    playing: playing,
    played: played,
    playerHeight: ownProps.height ? ownProps.height : 200,
    duration: duration,
    noteDialogOpen: state.videoDialog == video_id,
    editDialogOpen: editDialogOpen,
    editingNote:  editingNote,
    editingNoteId: editingNoteId,
    infoDialogOpen: state.infoDialog == video_id,
    carInfo: carInfo
  };
}
function mapDispatchToProps(dispatch){
  return {
    handleSeekChange: (seekPoint, video_id)=>{
      dispatch(setSeekPosition(video_id,seekPoint))
    },
    handleSeekMouseDown: (e, video_id)=>{
      dispatch(setSeeking(video_id, true))
    },
    handleSeekMouseUp: (e, video_id)=>{
      dispatch(setSeeking(video_id, false));
    },
    handlePlayPause: (e, video_id)=>{
      dispatch(togglePlay(video_id));
    },
    handleEnded: (e, video_id)=>{
      dispatch(setPlay(video_id, false));
    },
    handleDuration: (duration, video_id)=>{
      dispatch({
        type: SET_DURATION,
        value: {
          video_id: video_id,
          duration: duration
        }
      })
    },
    handleOpenNoteDialog: (e, video_id)=>{
      dispatch(setPlay(video_id, false));
      setTimeout(
        () => dispatch({
          type: "OPEN_NOTE_DIALOG",
          value: video_id
        }), 
        250
      );
      
    },
    handleEditNoteDialog: (e, video_id, note_id)=>{
      dispatch({
        type: "OPEN_EDIT_NOTE_DIALOG",
        value: {
          video_id: video_id,
          note_id: note_id
        }
      })
    },
    handleCloseNoteDialog: (e)=>{
      dispatch({
        type: "CLOSE_NOTE_DIALOG"
      })
    },
    handleCloseEditDialog: (e)=>{
      dispatch({
        type:"CLOSE_EDIT_NOTE_DIALOG"
      })
    },
    handleSaveNote: (note,video_id,time)=>{
      dispatch({
        type: "SAVE_NOTE_DIALOG",
        value: {
          video_id: video_id,
          note: note,
          time: time
        }
      })
    },
    handleEditNote: (note,video_id,note_id)=>{
      dispatch({
        type: "EDIT_NOTE",
        value: {
          video_id: video_id,
          note_id: note_id,
          note: note
        }
      })
    },
    handleOpenInfoDialog: (e,video_id)=>{
      dispatch({
        type: "OPEN_INFO_DIALOG",
        value: video_id
      });
    },
    handleCloseInfoDialog: (e)=>{
      dispatch({
        type: "CLOSE_INFO_DIALOG",
        value: undefined
      });
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
