import { FETCH_STOCK_DATA_NEWS, FETCH_STOCK_DATA_PRICE } from '../actions/stockDataPriceActions';

const initialState = {
  stockDataPrice: [],
  loading: false,
  error: null,
  searchTicker: '',
  stockDataNews: []
};

const stockDataPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_DATA_PRICE: {
      return {
        ...state,
        stockDataPrice: action.payload,
        loading: false,
        error: null
      };
    }
    case FETCH_STOCK_DATA_NEWS:
      return {
        ...state,
        stockDataNews: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default stockDataPriceReducer;
