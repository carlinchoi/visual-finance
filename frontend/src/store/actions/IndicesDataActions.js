export const FETCH_INDICES_DATA = 'FETCH_INDICES_DATA';

export const fetchIndicesData = (data) => {
  return {
    type: FETCH_INDICES_DATA,
    payload: data
  };
};
