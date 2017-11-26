import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LazyLoad from 'react-lazyload';

import { getHomeItems } from './redux/actions';
import {
  Divider,
  Header,
  TitleSubtitle,
  Contents,
  FacilitiesList,
  CarouselImages,
  Banner,
  Tours,
  LoadingWrapper,
  ErrorBoundaryComponent,
} from '../../components';

class Home extends Component {
  componentWillMount() {
    const { homeItems } = this.props;
    if (Object.keys(homeItems).length <= 0) {
      this.props.getHomeItems();
    }
  }
  render() {
    if (this.props.loading) {
      return <LoadingWrapper />;
    }
    const {
      hostels,
      welcome_content,
      tours_activities,
      facilities,
      gallery,
      sponsors,
    } = this.props.homeItems;
    return (
      <div>
        <Header contents={hostels} />
        <TitleSubtitle
          titleText={welcome_content.welcome_title}
          subtitleText={welcome_content.welcome_subtitle}
        />
        <Contents contentText={welcome_content.welcome_paragraph} />
        <Divider />
        <TitleSubtitle
          titleText={tours_activities.activities_title}
          subtitleText={tours_activities.activities_subtitle}
        />
        <LazyLoad height={200} once>
          <ErrorBoundaryComponent>
            <Tours activityItems={tours_activities.activities} />
          </ErrorBoundaryComponent>
        </LazyLoad>
        <Divider />
        <TitleSubtitle
          titleText={facilities.facilities_title}
          subtitleText={facilities.facilities_subtitle}
        />
        <ErrorBoundaryComponent>
          <FacilitiesList facilityItems={facilities.facility_items} />
        </ErrorBoundaryComponent>
        <LazyLoad height={200} once>
          <ErrorBoundaryComponent>
            <CarouselImages galleryImages={gallery} />
          </ErrorBoundaryComponent>
        </LazyLoad>
        <TitleSubtitle
          titleText={sponsors.sponsor_title}
          subtitleText={sponsors.sponsor_subtitle}
        />
        <LazyLoad height={200} once>
          <ErrorBoundaryComponent>
            <Banner bannerImage={sponsors.sponsor_banner} />
          </ErrorBoundaryComponent>
        </LazyLoad>
      </div>
    );
  }
}
Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  homeItems: PropTypes.object.isRequired, //eslint-disable-line
  getHomeItems: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.home.loading,
  homeItems: state.home.homeItems,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getHomeItems,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Home);
