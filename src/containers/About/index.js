import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LazyLoad from 'react-lazyload';

import { getAboutItems } from './redux/actions';
import {
  Divider,
  TitleSubtitle,
  Contents,
  Banner,
  LoadingWrapper,
} from '../../components';

class About extends Component {
  componentWillMount() {
    const { aboutItems } = this.props;
    if (Object.keys(aboutItems).length <= 0) {
      this.props.getAboutItems();
    }
  }
  render() {
    if (this.props.loading) {
      return <LoadingWrapper />;
    }
    const { banner, welcome_content, about_sponsor } = this.props.aboutItems;
    return (
      <div>
        <Banner
          bannerImage={banner.banner_image}
          bookButton={banner.book_button}
        />
        <div className="about-title">
          <TitleSubtitle
            titleText={welcome_content.welcome_title}
            subtitleText={welcome_content.welcome_subtitle}
          />
        </div>
        <Contents contentText={welcome_content.welcome_paragraph} />
        <Divider />
        <TitleSubtitle
          titleText={about_sponsor.sponsor_title}
          subtitleText={about_sponsor.sponsor_subtitle}
        />
        <LazyLoad height={200} once>
          <Banner bannerImage={about_sponsor.sponsor_image_1} />
        </LazyLoad>

        <LazyLoad height={200} once>
          <Banner bannerImage={about_sponsor.sponsor_image2} />
        </LazyLoad>
      </div>
    );
  }
}
About.propTypes = {
  loading: PropTypes.bool.isRequired,
  aboutItems: PropTypes.object.isRequired, //eslint-disable-line
  getAboutItems: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.about.loading,
  aboutItems: state.about.aboutItems,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAboutItems,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(About);
