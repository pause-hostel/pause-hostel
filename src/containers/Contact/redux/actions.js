import {
  CONTACT_ITEMS_LOAD,
  CONTACT_ITEMS_SUCCESS,
  CONTACT_ITEMS_FAILURE,
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
