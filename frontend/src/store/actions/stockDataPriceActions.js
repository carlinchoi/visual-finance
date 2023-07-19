export const FETCH_STOCK_DATA_PRICE = 'FETCH_STOCK_DATA_PRICE';
export const FETCH_STOCK_DATA_NEWS = 'FETCH_STOCK_DATA_NEWS';

export const fetchStockDataPrice = (data) => {
  return {
    type: FETCH_STOCK_DATA_PRICE,
    payload: data
  };
};

export const fetchStockDataNews = (data) => {
  return {
    type: FETCH_STOCK_DATA_NEWS,
    payload: data
  };
};
