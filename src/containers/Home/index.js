import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHomeItems } from './redux/actions';
import {
  Divider,
  Header,
  TitleSubtitle,
  Contents,
  RoomImages,
  FacilitiesList,
  CarouselImages,
  Banner,
  Tours,
  LoadingWrapper,
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
      room_content,
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
          titleText={room_content.room_section_title}
          subtitleText={room_content.room_section_subtitle}
        />
        <RoomImages rooms={room_content.rooms} />
        <Divider />
        <TitleSubtitle
          titleText={tours_activities.activities_title}
          subtitleText={tours_activities.activities_subtitle}
        />
        <Tours activityItems={tours_activities.activities} />
        <Divider />
        <TitleSubtitle
          titleText={facilities.facilities_title}
          subtitleText={facilities.facilities_subtitle}
        />
        <FacilitiesList facilityItems={facilities.facility_items} />
        <CarouselImages galleryImages={gallery} />
        <TitleSubtitle
          titleText={sponsors.sponsor_title}
          subtitleText={sponsors.sponsor_subtitle}
        />
        <Banner bannerImage={sponsors.sponsor_banner} />
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
