import { FETCH_COIN_DATA } from 'store/actions/coinGeckoActions';

const initialState = {
  coinData: [],
  loading: true,
  error: null
};

const coinGeckoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_DATA:
      return {
        ...state,
        coinData: action.payload, // This should set the fetched data to coinData
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default coinGeckoReducer;
