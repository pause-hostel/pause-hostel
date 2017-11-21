import {
  BELIZE_ITEMS_LOAD,
  BELIZE_ITEMS_SUCCESS,
  BELIZE_ITEMS_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  belizeItems: {},
};

function belizeReducer(state = initialState, action) {
  switch (action.type) {
    case BELIZE_ITEMS_LOAD:
      return { ...state, loading: true };

    case BELIZE_ITEMS_SUCCESS: {
      const { data } = action.payload;
      const { acf } = data[0];
      return { ...state, loading: false, belizeItems: acf || [] };
    }

    case BELIZE_ITEMS_FAILURE:
      return { ...state, loading: false, error: '' };

    default:
      return state;
  }
}

export default belizeReducer;
