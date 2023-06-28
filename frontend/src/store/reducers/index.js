// index.js

import { combineReducers } from 'redux';
import menu from './menu';
import financialStatementReducer from './financialStatementReducer';
import stockDataPriceReducer from './stockDataPriceReducer';

const reducers = combineReducers({ menu, financialStatement: financialStatementReducer, stockDataPrice:stockDataPriceReducer});

export default reducers;
