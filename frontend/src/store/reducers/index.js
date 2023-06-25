// index.js

import { combineReducers } from 'redux';
import menu from './menu';
import financialStatementReducer from './financialStatementReducer';

const reducers = combineReducers({ menu, financialStatement: financialStatementReducer });

export default reducers;
