export const FETCH_STOCK_DATA_PRICE = 'FETCH_STOCK_DATA_PRICE';

export const fetchStockDataPrice = (data) => {
  return {
    type: FETCH_STOCK_DATA_PRICE,
    payload: data
  };
};
