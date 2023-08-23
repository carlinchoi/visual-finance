export const FETCH_COIN_DATA = 'FETCH_COIN_DATA';

export const fetchCoinData = (data) => {
  return {
    type: FETCH_COIN_DATA,
    payload: data
  };
};
