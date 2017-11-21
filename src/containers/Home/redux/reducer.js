import {
  HOME_ITEMS_LOAD,
  HOME_ITEMS_SUCCESS,
  HOME_ITEMS_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  homeItems: {},
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_ITEMS_LOAD:
      return { ...state, loading: true };

    case HOME_ITEMS_SUCCESS: {
      const { data } = action.payload;
      const { acf } = data[0];
      return { ...state, loading: false, homeItems: acf || [] };
    }

    case HOME_ITEMS_FAILURE:
      return { ...state, loading: false, error: '' };

    default:
      return state;
  }
}

export default homeReducer;
