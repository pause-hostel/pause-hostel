import {
  NAV_ITEMS_LOAD,
  NAV_ITEMS_SUCCESS,
  NAV_ITEMS_FAILURE,
} from './constants';

const initialState = {
  loading: true,
  navItems: [],
};

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case NAV_ITEMS_LOAD:
      return { ...state, loading: true };

    // Do something when request start ...
    // @response meta is action.meta
    // @response $uid is action.meta.$uid
    // @response $requestOptions is action.meta.$requestOptions (if in config set `debug` is true)

    case NAV_ITEMS_SUCCESS:
      console.log(action);
      return { ...state, loading: false };

    case NAV_ITEMS_FAILURE:
      return { ...state, loading: false, error: '' };

    default:
      return state;
  }
}

export default navigationReducer;
