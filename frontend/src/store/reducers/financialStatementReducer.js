// currentLiabilitiesReducer.js

const FETCH_FINANCIAL_STATEMENT = 'FETCH_FINANCIAL_STATEMENT';

export const fetchFinancialStatement = (data) => {
  return {
    type: FETCH_FINANCIAL_STATEMENT,
    payload: data
  };
};

const initialState = {
  financialStatementData: [],
  loading: true,
  error: null
};

const financialStatementReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FINANCIAL_STATEMENT:
      return {
        ...state,
        financialStatementData: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default financialStatementReducer;
