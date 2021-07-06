import { combineReducers } from "redux";
import dimensions from "./dimensions";
import partList from "./partList";
import carConfig from "./carConfig";
import compCarConfig from "./compCarConfig";
import gaCars from "./gaCars";
import testedCars from "./testedCars";
import loading from "./loading";
import tabs from "./tabs";
import {numEpisodes, practiceEps} from "./testParams";
import questions from "./questions";
import selectedFeatures from "./selectedFeatures";
import currentView from "./views";
import designDescriptions from "./descriptions";
import {activeVideoList, videoPlayers, videoDialog, infoDialog, timestampNotes, fullscreenVideo, editingNote, radarTooltips} from "./videos";
import persona from "./persona";
import { session, userId } from "./auth";
import { sortResultsOn, sortResultsOrder, sortResultsDisplay } from "./resultsList";
import submitModalOpen from "./submitModal";
import {
  carRacingUrl,
  carRacingStaticUrl,
  carRacingApiUrl,
  testDriveProgress,
  practiceProgress,
  testDriveVideo,
  testDriveVideoVae,
  testDriveVideoMdrnn,
  testDriveVideoArray,
  testDriveVideoCounter,
  statsPlotPath,
  submitted
} from "./paths";
const chopShopReducer = combineReducers({
  dimensions,
  partList,
  carConfig,
  compCarConfig,
  gaCars,
  carRacingUrl,
  carRacingStaticUrl,
  carRacingApiUrl,
  testDriveVideo,
  testDriveProgress,
  testDriveVideoVae,
  testDriveVideoMdrnn,
  testDriveVideoArray,
  testDriveVideoCounter,
  videoPlayers,
  statsPlotPath,
  testedCars,
  loading,
  numEpisodes,
  tabs,
  session,
  userId,
  questions,
  selectedFeatures,
  currentView,
  designDescriptions,
  activeVideoList,
  videoDialog,
  editingNote,
  fullscreenVideo,
  timestampNotes,
  persona,
  sortResultsOn,
  sortResultsDisplay,
  sortResultsOrder,
  practiceEps,
  practiceProgress,
  submitModalOpen,
  infoDialog,
  submitted,
  radarTooltips
});

export default chopShopReducer;
