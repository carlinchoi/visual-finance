// index.js

import { combineReducers } from 'redux';
import menu from './menu';
import financialStatementReducer from './financialStatementReducer';
import stockDataPriceReducer from './stockDataPriceReducer';
import stockDividendsReducer from './stockDividendsReducer';
import twelveDataReducer from './twelveDataReducer';
import indicesDataReducer from './IndicesDataReducer';
import coinGeckoReducer from './coinGeckoReducer';
import authReducer from './authReducer'; // Adjust the relative path as needed

const reducers = combineReducers({
  menu,
  financialStatement: financialStatementReducer,
  stockDataPrice: stockDataPriceReducer,
  stockDividends: stockDividendsReducer,
  twelveData: twelveDataReducer,
  indicesData: indicesDataReducer,
  coinData: coinGeckoReducer,
  auth: authReducer
});

export default reducers;
