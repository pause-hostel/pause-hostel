import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getNavItems } from './redux/actions';
import {
  Navigation,
  Footer,
  LoadingWrapper,
  NotFound,
  ErrorBoundaryPage,
} from '../../components';
import {
  ROOT,
  MEXICO_PAGE,
  ABOUT_PAGE,
  BELIZE_PAGE,
  CONTACT_PAGE,
} from '../../routes/index';

import '../../index.css';

import Home from '../Home';
import Mexico from '../Mexico';
import About from '../About';
import Belize from '../Belize';
import Contact from '../Contact';

class App extends Component {
  componentWillMount() {
    const { navItems } = this.props;
    if (Object.keys(navItems).length <= 0) {
      this.props.getNavItems();
    }
  }
  render() {
    const { navItems: { navigation_items } } = this.props;
    return (
      <div>
        {!this.props.loading ? (
          <div>
            <BrowserRouter>
              <div>
                <ErrorBoundaryPage>
                  <Navigation {...navigation_items} />
                  <Switch>
                    <Route exact path={ROOT} component={Home} />
                    <Route path={MEXICO_PAGE} component={Mexico} />
                    <Route path={ABOUT_PAGE} component={About} />
                    <Route path={BELIZE_PAGE} component={Belize} />
                    <Route path={CONTACT_PAGE} component={Contact} />
                    <Route component={NotFound} />
                  </Switch>
                  <Footer {...navigation_items} />
                </ErrorBoundaryPage>
              </div>
            </BrowserRouter>
          </div>
        ) : (
          <LoadingWrapper />
        )}
      </div>
    );
  }
}
App.propTypes = {
  loading: PropTypes.bool.isRequired,
  navItems: PropTypes.object.isRequired, //eslint-disable-line
  getNavItems: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.navigation.loading,
  navItems: state.navigation.navItems,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getNavItems,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(App);
