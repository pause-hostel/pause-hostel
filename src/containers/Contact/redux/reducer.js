import {
  CONTACT_ITEMS_LOAD,
  CONTACT_ITEMS_SUCCESS,
  CONTACT_ITEMS_FAILURE,
  CONTACT_SEND_MAIL,
  CONTACT_SEND_MAIL_SUCCESS,
  CONTACT_SEND_MAIL_FAILURE,
} from './constants';

const initialState = {
  loading: true, // load contact items
  contactItems: {}, // items from api
  loadingMail: false,
  mailSuccess: false,
  mailError: '',
};

const errMsg =
  'Error sending email please try again, or alternativly send a mail to the email located above the form.';

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
        mailSuccess: false,
        mailError: '',
      };

    case CONTACT_SEND_MAIL_SUCCESS: {
      const { success } = action.payload.data;
      return {
        ...state,
        loadingMail: false,
        mailSuccess: success,
        mailError: success ? '' : errMsg, // response is a bool (we could get a 200) but failed sent mail
      };
    }
    case CONTACT_SEND_MAIL_FAILURE: {
      const { error: { response: { data } } } = action;
      const err = data.message ? data.message : data.error;
      console.log(err);
      return {
        ...state,
        loadingMail: false,
        mailSuccess: false,
        mailError: errMsg,
      };
    }

    default:
      return state;
  }
}

export default contactReducer;
