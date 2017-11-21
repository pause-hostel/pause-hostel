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
    this.props.getHomeItems();
  }
  render() {
    return !this.props.loading ? (
      <div>
        <Header />
        <TitleSubtitle
          titleText={this.props.homeItems.welcome_content.welcome_title}
          subtitleText={this.props.homeItems.welcome_content.welcome_subtitle}
        />
        <Contents
          contentText={this.props.homeItems.welcome_content.welcome_paragraph}
        />
        <Divider />
        <TitleSubtitle
          titleText={this.props.homeItems.room_content.room_section_title}
          subtitleText={this.props.homeItems.room_content.room_section_subtitle}
        />
        <RoomImages rooms={this.props.homeItems.room_content.rooms} />
        <Divider />
        <TitleSubtitle
          titleText={this.props.homeItems.tours_activities.activities_title}
          subtitleText={
            this.props.homeItems.tours_activities.activities_subtitle
          }
        />
        <Tours
          activityItems={this.props.homeItems.tours_activities.activities}
        />
        <Divider />
        <TitleSubtitle
          titleText={this.props.homeItems.facilities.facilities_title}
          subtitleText={this.props.homeItems.facilities.facilities_title}
        />
        <FacilitiesList
          facilityItems={this.props.homeItems.facilities.facility_items}
        />
        <CarouselImages />
        <TitleSubtitle
          titleText={this.props.homeItems.welcome_content.welcome_title}
          subtitleText={this.props.homeItems.welcome_content.welcome_subtitle}
        />
        <Banner />
      </div>
    ) : (
      <LoadingWrapper />
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
