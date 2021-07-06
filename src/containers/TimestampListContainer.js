import TimestampList from "../components/TimestampList";
import { connect } from "react-redux";
import { timestampNotes } from "../reducers/videos";


function mapStateToProps(state, ownProps) {
    let video_id = 'video_id' in ownProps ? ownProps.video_id : undefined;
    let timestampNotes = [];
    if(video_id != undefined){
        timestampNotes = state.session && state.session.test_drive_analysis && state.session.test_drive_analysis[video_id]  && 
        state.session.test_drive_analysis[video_id].notes ? state.session.test_drive_analysis[video_id].notes : [];
    }

    let ids = [];
    for (let i = 0; i < timestampNotes.length; i++) {
        ids.push(i);
    }
    return {
        timestampNotes: timestampNotes,
        video_id: video_id,
        note_ids: ids.sort((a,b)=>{
            return timestampNotes[a].time - timestampNotes[b].time;
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openEditDialog: (video_id, note_id)=>{
            dispatch({
              type: "OPEN_EDIT_NOTE_DIALOG",
              value: {
                video_id: video_id,
                note_id: note_id
              }
            })
          },
        deleteNote: (video_id, note_id)=>{
            dispatch({
                type: "DELETE_NOTE",
                value: {
                    video_id: video_id,
                    note_id: note_id
                }
            })
        }
      
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimestampList);