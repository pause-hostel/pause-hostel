import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import navigation from '../containers/App/redux/reducer';
import home from '../containers/Home/redux/reducer';
import about from '../containers/About/redux/reducer';
import mexico from '../containers/Mexico/redux/reducer';
import belize from '../containers/Belize/redux/reducer';

export default combineReducers({
  router: routerReducer,
  navigation,
  home,
  about,
  mexico,
  belize,
});
