// index.js

import { combineReducers } from 'redux';
import menu from './menu';
import financialStatementReducer from './financialStatementReducer';
import stockDataPriceReducer from './stockDataPriceReducer';
import stockDividendsReducer from './stockDividendsReducer';
import twelveDataReducer from './twelveDataReducer';
import indicesDataReducer from './IndicesDataReducer';

const reducers = combineReducers({
  menu,
  financialStatement: financialStatementReducer,
  stockDataPrice: stockDataPriceReducer,
  stockDividends: stockDividendsReducer,
  twelveData: twelveDataReducer,
  indicesData: indicesDataReducer
});

export default reducers;
