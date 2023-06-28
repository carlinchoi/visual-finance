const FETCH_FINANCIAL_STATEMENT = 'FETCH_FINANCIAL_STATEMENT';
const SET_SEARCH_TICKER = 'SET_SEARCH_TICKER';

export const fetchFinancialStatement = (data) => {
  return {
    type: FETCH_FINANCIAL_STATEMENT,
    payload: data
  };
};

export const setSearchTicker = (ticker) => {
  return {
    type: SET_SEARCH_TICKER,
    payload: ticker
  };
};

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
    default:
      return state;
  }
};

export default financialStatementReducer;
