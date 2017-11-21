import {
  CONTACT_ITEMS_LOAD,
  CONTACT_ITEMS_SUCCESS,
  CONTACT_ITEMS_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  contactItems: {},
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT_ITEMS_LOAD:
      return { ...state, loading: true };

    case CONTACT_ITEMS_SUCCESS: {
      const { data } = action.payload;
      const { acf } = data[0];
      return { ...state, loading: false, contactItems: acf || [] };
    }

    case CONTACT_ITEMS_FAILURE:
      return { ...state, loading: false, error: '' };

    default:
      return state;
  }
}

export default contactReducer;
