import { FETCH_INDICES_DATA } from 'store/actions/IndicesDataActions';

const initialState = {
  indicesData: [],
  loading: false,
  error: null
};

const indicesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INDICES_DATA: {
      const { payload } = action;
      return {
        ...state,
        indicesData: payload,
        loading: false,
        error: null
      };
    }
    default:
      return state;
  }
};

export default indicesDataReducer;
