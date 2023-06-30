import { FETCH_STOCK_DATA_PRICE } from '../actions/stockDataPriceActions';

const initialState = {
  stockDataPrice: [],
  loading: false,
  error: null,
  searchTicker: ''
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
