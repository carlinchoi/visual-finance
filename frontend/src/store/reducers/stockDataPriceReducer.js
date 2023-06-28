const FETCH_STOCK_DATA_PRICE = 'FETCH_STOCK_DATA_PRICE';

export const fetchStockDataPrice = (data) => {
  return {
    type: FETCH_STOCK_DATA_PRICE,
    payload: data
  };
};

const initialState = {
  data: {
    stockDataPrice: [],
    loading: false,
    error: null,
    searchTicker: ''
  }
};

const stockDataPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DATA_PRICE: {
      const { payload } = action;
      return {
        ...state,
        stockDataPrice: payload,
        loading: false,
        error: null
      };
    }
    default:
      return state;
  }
};

export default stockDataPriceReducer;
