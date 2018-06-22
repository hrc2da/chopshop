import { combineReducers } from 'redux';
import dimensions from './dimensions';
import partList from './partList';
import carConfig from './carConfig';
import compCarConfig from './compCarConfig';
import gaCars from './gaCars';
import testedCars from './testedCars';
import loading from './loading';
import {carRacingUrl,carRacingStaticUrl,carRacingApiUrl,testDriveVideo} from './paths';
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
  testedCars,
  loading
});

export default chopShopReducer;
