import { combineReducers } from 'redux';
import dimensions from './dimensions';
import partList from './partList';
import carConfig from './carConfig';
import gaCars from './gaCars';

const chopShopReducer = combineReducers({
	dimensions,
  partList,
  carConfig,
  gaCars
});

export default chopShopReducer;
