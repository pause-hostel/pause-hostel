import {
  ABOUT_ITEMS_LOAD,
  ABOUT_ITEMS_SUCCESS,
  ABOUT_ITEMS_FAILURE,
} from './constants';

export const getAboutItems = () => ({
  types: [ABOUT_ITEMS_LOAD, ABOUT_ITEMS_SUCCESS, ABOUT_ITEMS_FAILURE],
  payload: {
    request: {
      url: '/about',
    },
  },
});

export const aboutItemsSuccess = ({ payload: data }) => ({
  type: ABOUT_ITEMS_SUCCESS,
  payload: { data },
});

export const aboutItemsFailure = error => ({
  type: ABOUT_ITEMS_FAILURE,
  error,
});
