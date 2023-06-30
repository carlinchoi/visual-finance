import { FETCH_FINANCIAL_STATEMENT } from '../actions/financialStatementActions';
import { SET_SEARCH_TICKER } from '../actions/financialStatementActions';
import { RESET_SEARCH_TICKER } from '../actions/financialStatementActions';

const initialState = {
  financialStatementData: [],
  loading: true,
  error: null,
  searchTicker: null
};

const financialStatementReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FINANCIAL_STATEMENT:
      return {
        ...state,
        financialStatementData: action.payload,
        loading: false,
        error: null
      };
    case SET_SEARCH_TICKER:
      return {
        ...state,
        searchTicker: action.payload
      };
    case RESET_SEARCH_TICKER:
      return {
        ...state,
        searchTicker: null
      };
    default:
      return state;
  }
};

export default financialStatementReducer;
