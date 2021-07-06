import VideoFullScreen from "../components/VideoFullScreen";
import { connect } from "react-redux";
import { setFullscreenVideo } from "../actions/videos";
import { setAnalysis } from "../actions/questions";

function mapStateToProps(state, ownProps) {
     //starts with t then tutorial
    let showFullscreen = 'fullscreenVideo' in state && state.fullscreenVideo != -1;
    let video = undefined;
    if(showFullscreen){
        let videoKey = String(state.fullscreenVideo);
        if(videoKey[0]=="t"){
            video = state.session.initial_test_drives[parseInt(videoKey[1])]
        }
        else{
            video = state.session.tested_videos[state.fullscreenVideo];
        }
    }
    let testDriveAnalysis = '';
    if(showFullscreen && state.session.test_drive_analysis && state.session.test_drive_analysis[state.fullscreenVideo]){
        testDriveAnalysis = state.session.test_drive_analysis[state.fullscreenVideo]["overview"]
    }
    return {
        showFullscreen: showFullscreen,
        reward: 0,
        video: video,
        videoIndex: state.fullscreenVideo,
        testDriveAnalysis: testDriveAnalysis
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        handleClose: (e) => {
            return dispatch(setFullscreenVideo(false,-1));
        },
        handleChangeAnalysis: (e,id,question) => {
            return dispatch(setAnalysis(question,id,e.target.value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoFullScreen);