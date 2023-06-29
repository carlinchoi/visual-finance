const FETCH_DIVIDENDS_REDUCER = 'FETCH_DIVIDENDS_REDUCER';

export const fetchStockDividends = (data) => {
  return {
    type: FETCH_DIVIDENDS_REDUCER,
    payload: data
  };
};

const initialState = {
  stockDividendsData: [],
  loading: true,
  error: null,
  searchTicker: ''
};

const stockDividendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIVIDENDS_REDUCER:
      return {
        ...state,
        stockDividendsData: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default stockDividendsReducer;
