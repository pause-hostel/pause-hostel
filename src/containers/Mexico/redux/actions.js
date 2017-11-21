import {
  MEXICO_ITEMS_LOAD,
  MEXICO_ITEMS_SUCCESS,
  MEXICO_ITEMS_FAILURE,
} from './constants';

export const getMexicoItems = () => ({
  types: [MEXICO_ITEMS_LOAD, MEXICO_ITEMS_SUCCESS, MEXICO_ITEMS_FAILURE],
  payload: {
    request: {
      url: '/chetumal',
    },
  },
});

export const mexicoItemsSuccess = ({ payload: data }) => ({
  type: MEXICO_ITEMS_SUCCESS,
  payload: { data },
});

export const mexicoItemsFailure = error => ({
  type: MEXICO_ITEMS_FAILURE,
  error,
});
