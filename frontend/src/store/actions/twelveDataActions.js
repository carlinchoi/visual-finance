export const FETCH_TWELVE_DATA = 'FETCH_TWELVE_DATA';

export const fetchTwelveData = (data) => {
  return {
    type: FETCH_TWELVE_DATA,
    payload: data
  };
};
