// index.js

import { combineReducers } from 'redux';
import menu from './menu';
import currentLiabilitiesReducer from './currentLiabilitiesReducer';

const reducers = combineReducers({ menu, currentLiabilities: currentLiabilitiesReducer });

export default reducers;
