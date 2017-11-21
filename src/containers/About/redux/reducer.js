import {
  ABOUT_ITEMS_LOAD,
  ABOUT_ITEMS_SUCCESS,
  ABOUT_ITEMS_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  aboutItems: {},
};

function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case ABOUT_ITEMS_LOAD:
      return { ...state, loading: true };

    case ABOUT_ITEMS_SUCCESS: {
      const { data } = action.payload;
      const { acf } = data[0];
      return { ...state, loading: false, aboutItems: acf || [] };
    }

    case ABOUT_ITEMS_FAILURE:
      return { ...state, loading: false, error: '' };

    default:
      return state;
  }
}

export default aboutReducer;
