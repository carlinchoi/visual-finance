export const FETCH_TWELVE_LOGO = 'FETCH_TWELVE_LOGO';
export const FETCH_TWELVE_EARNINGS = 'FETCH_TWELVE_EARNINGS';
export const FETCH_TWELVE_INDICES = 'FETCH_TWELVE_INDICES';

export const fetchTwelveLogoData = (data) => {
  return {
    type: FETCH_TWELVE_LOGO,
    payload: data
  };
};

export const fetchTwelveEarningsDate = (data) => {
  return {
    type: FETCH_TWELVE_EARNINGS,
    payload: data
  };
};

export const fetchTwelveIndices = (data) => {
  return {
    type: FETCH_TWELVE_INDICES,
    payload: data
  };
};
