import { combineReducers } from 'redux';
import dimensions from './dimensions';
import partList from './partList';

const chopShopReducer = combineReducers({
	dimensions,
  partList
});

export default chopShopReducer;
