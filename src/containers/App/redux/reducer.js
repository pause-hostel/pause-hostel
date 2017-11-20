import {
  NAV_ITEMS_LOAD,
  NAV_ITEMS_SUCCESS,
  NAV_ITEMS_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  navItems: {},
};

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case NAV_ITEMS_LOAD:
      return { ...state, loading: true };

    case NAV_ITEMS_SUCCESS: {
      const { data } = action.payload;
      const { acf } = data[0];
      return { ...state, loading: false, navItems: acf || [] };
    }

    case NAV_ITEMS_FAILURE:
      return { ...state, loading: false, error: '' };

    default:
      return state;
  }
}

export default navigationReducer;
