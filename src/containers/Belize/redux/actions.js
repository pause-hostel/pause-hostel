import {
  BELIZE_ITEMS_LOAD,
  BELIZE_ITEMS_SUCCESS,
  BELIZE_ITEMS_FAILURE,
} from './constants';

export const getBelizeItems = () => ({
  types: [BELIZE_ITEMS_LOAD, BELIZE_ITEMS_SUCCESS, BELIZE_ITEMS_FAILURE],
  payload: {
    request: {
      url: '/cayecaulker',
    },
  },
});

export const belizeItemsSuccess = ({ payload: data }) => ({
  type: BELIZE_ITEMS_SUCCESS,
  payload: { data },
});

export const belizeItemsFailure = error => ({
  type: BELIZE_ITEMS_FAILURE,
  error,
});
