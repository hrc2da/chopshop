import { combineReducers } from 'redux';
import dimensions from './dimensions';
import partList from './partList';
import carConfig from './carConfig';
import gaCars from './gaCars';
import testedCars from './testedCars';
import {carRacingUrl,carRacingStaticUrl,carRacingApiUrl,testDriveVideo} from './paths';
const chopShopReducer = combineReducers({
	dimensions,
  partList,
  carConfig,
  gaCars,
  carRacingUrl,
  carRacingStaticUrl,
  carRacingApiUrl,
  testDriveVideo,
  testedCars
});

export default chopShopReducer;
