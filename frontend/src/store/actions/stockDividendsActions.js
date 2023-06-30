export const FETCH_STOCK_DIVIDENDS = 'FETCH_STOCK_DIVIDENDS';

export const fetchStockDividends = (data) => {
  return {
    type: FETCH_STOCK_DIVIDENDS,
    payload: data
  };
};
