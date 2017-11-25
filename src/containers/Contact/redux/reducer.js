import {
  CONTACT_ITEMS_LOAD,
  CONTACT_ITEMS_SUCCESS,
  CONTACT_ITEMS_FAILURE,
  CONTACT_SEND_MAIL,
  CONTACT_SEND_MAIL_SUCCESS,
  CONTACT_SEND_MAIL_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  contactItems: {},
  loadingMail: false,
  mailResponse: false,
  mailError: '',
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CONTACT_ITEMS_LOAD: {
      return { ...state, loading: true };
    }
    case CONTACT_ITEMS_SUCCESS: {
      const { data } = action.payload;
      const { acf } = data[0];
      return { ...state, loading: false, contactItems: acf || [] };
    }

    case CONTACT_ITEMS_FAILURE: {
      return { ...state, loading: false, error: '' };
    }
    case CONTACT_SEND_MAIL:
      return {
        ...state,
        loadingMail: true,
        mailResponse: false,
        mailError: false,
      };

    case CONTACT_SEND_MAIL_SUCCESS: {
      return {
        ...state,
        loadingMail: false,
        mailResponse: true,
        mailError: false,
      };
    }
    case CONTACT_SEND_MAIL_FAILURE: {
      const { error } = action.paylod;
      return {
        ...state,
        loadingMail: false,
        mailResponse: false,
        error,
      };
    }

    default:
      return state;
  }
}

export default contactReducer;
