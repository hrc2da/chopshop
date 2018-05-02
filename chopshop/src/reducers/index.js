import { combineReducers } from 'redux';
import dimensions from './dimensions';
import partList from './partList';
import carConfig from './carConfig';

const chopShopReducer = combineReducers({
	dimensions,
  partList,
  carConfig
});

export default chopShopReducer;
