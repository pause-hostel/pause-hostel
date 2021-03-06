import config from '../../../config';
import {
  CONTACT_ITEMS_LOAD,
  CONTACT_ITEMS_SUCCESS,
  CONTACT_ITEMS_FAILURE,
  CONTACT_SEND_MAIL,
  CONTACT_SEND_MAIL_SUCCESS,
  CONTACT_SEND_MAIL_FAILURE,
} from './constants';

export const getContactItems = () => ({
  types: [CONTACT_ITEMS_LOAD, CONTACT_ITEMS_SUCCESS, CONTACT_ITEMS_FAILURE],
  payload: {
    request: {
      url: '/contact',
    },
  },
});

export const contactItemsSuccess = ({ payload: data }) => ({
  type: CONTACT_ITEMS_SUCCESS,
  payload: { data },
});

export const contactItemsFailure = error => ({
  type: CONTACT_ITEMS_FAILURE,
  error,
});

export const sendMail = data => ({
  types: [
    CONTACT_SEND_MAIL,
    CONTACT_SEND_MAIL_SUCCESS,
    CONTACT_SEND_MAIL_FAILURE,
  ],
  payload: {
    request: {
      url: '/email-proxy/v1/email',
      method: 'POST',
      data: { secret_key: config.email_secret, ...data },
    },
  },
});

export const sendMailSuccess = ({ payload: data }) => ({
  type: CONTACT_SEND_MAIL_SUCCESS,
  payload: { data },
});

export const sendMailFailure = error => ({
  type: CONTACT_SEND_MAIL_FAILURE,
  error,
});
