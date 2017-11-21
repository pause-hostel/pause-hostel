import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from '../containers/App/redux/reducer';
import home from '../containers/Home/redux/reducer';

export default combineReducers({
  router: routerReducer,
  navigation,
  home,
});
