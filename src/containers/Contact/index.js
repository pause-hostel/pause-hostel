import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContactItems, sendMail } from './redux/actions';
import {
  Banner,
  Location,
  TitleSubtitle,
  Contents,
  LoadingWrapper,
  ContactForm,
  Divider,
} from '../../components';

class Contact extends Component {
  componentWillMount() {
    const { contactItems } = this.props;
    if (Object.keys(contactItems).length <= 0) {
      this.props.getContactItems();
    }
  }

  contactFromSubmit = (submission) => {
    const { email: sendToMail } = this.props.navItems.navigation_items;
    const { name, email, message, guests, location, room } = submission;

    const messageToSend = ` Guests: ${guests}\n Location: ${location}\n Room: ${
      room
    }\n Message: ${message}`;

    this.props.sendEmail({
      send_to: sendToMail,
      reply_to: email,
      send_from_name: name,
      subject: `Hostel Inquiry ${location}`,
      message: messageToSend,
    });
  };
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
        <ContactForm
          loadingMail={this.props.loadingMail}
          mailError={this.props.mailError}
          mailSuccess={this.props.mailSuccess}
          submitForm={this.contactFromSubmit}
        />
        <Divider />
        {Object.values(directions).map((direction, idx) => (
          <Location key={`direction-${idx}`} {...direction} />
        ))}
      </div>
    );
  }
}
Contact.propTypes = {
  loading: PropTypes.bool.isRequired,
  contactItems: PropTypes.object.isRequired, //eslint-disable-line
  getContactItems: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  navItems: PropTypes.object.isRequired, // eslint-disable-line
  mailSuccess: PropTypes.bool.isRequired,
  loadingMail: PropTypes.bool.isRequired,
  mailError: PropTypes.string, //eslint-disable-line
};
const mapStateToProps = state => ({
  loading: state.contact.loading,
  contactItems: state.contact.contactItems,
  loadingMail: state.contact.loadingMail,
  mailSuccess: state.contact.mailSuccess,
  mailError: state.contact.mailError,
  navItems: state.navigation.navItems,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getContactItems,
      sendEmail: sendMail,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
