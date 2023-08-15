import { FETCH_COIN_DATA } from 'store/actions/coinGeckoActions';

const initialState = {
  coinData: [],
  loading: true,
  error: null
};

const coinDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return {
        ...state,
        coinData: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};
