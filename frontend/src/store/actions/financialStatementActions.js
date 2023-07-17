export const FETCH_FINANCIAL_STATEMENT = 'FETCH_FINANCIAL_STATEMENT';
export const SET_SEARCH_TICKER = 'SET_SEARCH_TICKER';
export const RESET_SEARCH_TICKER = 'RESET_SEARCH_TICKER';

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

export const resetSearchTicker = () => {
  return {
    type: RESET_SEARCH_TICKER
  };
};
