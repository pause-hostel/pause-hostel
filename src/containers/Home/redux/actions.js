import {
  HOME_ITEMS_LOAD,
  HOME_ITEMS_SUCCESS,
  HOME_ITEMS_FAILURE,
} from './constants';

export const getHomeItems = () => ({
  types: [HOME_ITEMS_LOAD, HOME_ITEMS_SUCCESS, HOME_ITEMS_FAILURE],
  payload: {
    request: {
      url: '/home',
    },
  },
});

export const homeItemsSuccess = ({ payload: data }) => ({
  type: HOME_ITEMS_SUCCESS,
  payload: { data },
});

export const homeItemsFailure = error => ({
  type: HOME_ITEMS_FAILURE,
  error,
});
