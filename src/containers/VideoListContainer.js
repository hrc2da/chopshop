import { connect } from "react-redux";
import { setActiveVideos, setFullscreenVideo, REMOVE_ACTIVE_VIDEO_BY_ID } from "../actions/videos";
import { setAnalysis } from "../actions/questions";
import VideoList from "../components/VideoList";

function mapStateToProps(state, ownProps) {
  //   let vaeVids = state.session.tested_videos.map((vid) => {
  //     let parts = vid.split("/");
  //     return parts[0]+"/"+parts[1]+"/vae"+parts[2]
  //   })
  let videoList = Object.assign([],state.session.tested_videos);
  if(ownProps.list=="tutorial"){
    videoList = state.session ? state.session.initial_test_drives : [];
    if(videoList == undefined) videoList = [];
  }

  return {
    sortResultsOn: "time",
    variant: ownProps.list ? ownProps.list : "analysis",
    testedDesigns: state.session.tested_designs,
    testedRewards: state.session.tested_results,
    testedVideos: videoList,
    testDriveAnalysis: state.session.test_drive_analysis,
    activeVideoList: ownProps.list=="tutorial" ? [...Array(videoList.length).keys()] : state.activeVideoList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSortChange: (e) => {
      return;
    },
    handleRemoveVideo: (videoId) => {
      return dispatch(setActiveVideos(REMOVE_ACTIVE_VIDEO_BY_ID, videoId));
    },
    handleFullscreenVideo: (videoId) => {
      return dispatch(setFullscreenVideo(true, videoId));
    },
    handleChangeAnalysis: (e,id,question) => {
      return dispatch(setAnalysis(question,id,e.target.value));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
