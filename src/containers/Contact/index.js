import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactItems } from './redux/actions';
import {
  Banner,
  Divider,
  Location,
  TitleSubtitle,
  Contents,
  LoadingWrapper,
} from '../../components';

class Contact extends Component {
  componentWillMount() {
    this.props.getContactItems();
  }
  render() {
    if (this.props.loading) {
      return <LoadingWrapper />;
    }
    const {
      contact_banner,
      welcome_content,
      directions,
    } = this.props.contactItems;
    return (
      <div>
        <Banner bannerImage={contact_banner} />
        <TitleSubtitle
          titleText={welcome_content.welcome_title}
          subtitleText={welcome_content.welcome_subtitle}
        />
        <Contents contentText={welcome_content.welcome_paragraph} />
        {Object.values(directions).map(direction => (
          <Location {...direction} />
        ))}
      </div>
    );
  }
}
Contact.propTypes = {
  loading: PropTypes.bool.isRequired,
  contactItems: PropTypes.object.isRequired, //eslint-disable-line
  getContactItems: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  loading: state.contact.loading,
  contactItems: state.contact.contactItems,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getContactItems,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
