import {
  MEXICO_ITEMS_LOAD,
  MEXICO_ITEMS_SUCCESS,
  MEXICO_ITEMS_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  mexicoItems: {},
};

function mexicoReducer(state = initialState, action) {
  switch (action.type) {
    case MEXICO_ITEMS_LOAD:
      return { ...state, loading: true };

    case MEXICO_ITEMS_SUCCESS: {
      const { data } = action.payload;
      const { acf } = data[0];
      return { ...state, loading: false, mexicoItems: acf || [] };
    }

    case MEXICO_ITEMS_FAILURE:
      return { ...state, loading: false, error: '' };

    default:
      return state;
  }
}

export default mexicoReducer;
