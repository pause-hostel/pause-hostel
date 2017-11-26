import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import 'react-select/dist/react-select.css';
import './contactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    location: '',
    guests: '',
    room: '',
    message: '',
    emailError: '',
    dateRange: {
      from: undefined,
      to: undefined,
    },
  };

  handleDayClick = (day) => {
    const { dateRange } = this.state;
    const { from, to } = DateUtils.addDayToRange(day, dateRange);
    this.setState({ dateRange: { from, to } });
  };

  handleResetClick = (event) => {
    event.preventDefault();
    this.setState({ dateRange: { from: undefined, to: undefined } });
  };

  handleSelectChange = id => (selectedOption) => {
    if (!selectedOption) {
      return this.setState({ [id]: '' });
    }
    const { value } = selectedOption;
    return this.setState({ [id]: value });
  };

  handleInputChange = id => event =>
    this.setState({ [id]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email) {
      return this.setState({
        emailError: 'We need your address email when you make an inquiry',
      });
    }
    return this.setState({ emailError: '' }, this.props.submitForm(this.state));
  };
  render() {
    const {
      name,
      email,
      location,
      guests,
      room,
      message,
      dateRange: { from, to },
    } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <form className="form-wrapper">
        <div>
          <label htmlFor="contact-name">Full Name</label>
          <div>
            <input
              onChange={this.handleInputChange('name')}
              id="contact-name"
              type="text"
              name="name"
              placeholder="Full Name"
              value={name}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-email">Email</label>
          <div id="contact-email">
            <input
              onChange={this.handleInputChange('email')}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-location">Location</label>
          <div>
            <Select
              id="contact-location"
              name="location"
              value={location}
              onChange={this.handleSelectChange('location')}
              className="select"
              options={[
                { value: 'chetumal', label: 'Chetumal, Mexico' },
                { value: 'caye caulker', label: 'Caye Caulker, Belize' },
              ]}
            />
          </div>
        </div>
        <div>
          <label htmlFor="check-in">Check In & Out</label>
          <div className="RangeExample">
            <p>
              {!from && !to && 'Please select check in date'}
              {from && !to && 'Please select check out date'}
              {from &&
                to &&
                `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
              {from &&
                to && (
                  <button
                    className="reset-link"
                    onClick={this.handleResetClick}
                  >
                    Reset
                  </button>
                )}
            </p>
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-guests">Guests</label>
          <Select
            id="contact-guests"
            name="guests"
            value={guests}
            onChange={this.handleSelectChange('guests')}
            className="select"
            options={[
              { value: '1 person', label: '1 person' },
              { value: '2 people', label: '2 people' },
              { value: '3 people', label: '3 people' },
              { value: '4 people', label: '4 people' },
              { value: '5 people', label: '5 people' },
              { value: '6 people', label: '6 people' },
              { value: '7 people', label: '7 people' },
              { value: '8 people', label: '8 people' },
              { value: '9 people', label: '9 people' },
              { value: '10+ people', label: '10+ people' },
            ]}
          />
        </div>
        <div>
          <label htmlFor="room-type">Room Type</label>
          <div>
            <input
              onChange={this.handleInputChange('room')}
              id="room-type"
              type="text"
              name="roomType"
              placeholder="eg. 6 bed dorm"
              value={room}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-message">Message</label>
          <div>
            <textarea
              onChange={this.handleInputChange('message')}
              id="contact-message"
              type="text"
              name="message"
              rows="10"
              cols="40"
              placeholder="Message"
              value={message}
            />
          </div>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>
            Send
          </button>
          {this.props.mailSuccess ? (
            <div className="mail-success">
              <p>
                Your message was successfully sent. We will get back to you
                soon!
                <span role="img" aria-label="success">
                  &#128077;
                </span>
              </p>
            </div>
          ) : null}
          {this.props.mailError ? <div> {this.props.mailError} </div> : null}
          {this.props.loadingMail ? (
            <div className="mail-sending">
              ...sending{' '}
              <span role="img" aria-label="sending">
                &#128062;
              </span>
            </div>
          ) : null}
        </div>
      </form>
    );
  }
}
ContactForm.propTypes = {
  mailSuccess: PropTypes.bool,
  mailError: PropTypes.string,
  loadingMail: PropTypes.bool,
  numberOfMonths: PropTypes.number,
};
ContactForm.defaultProps = {
  mailSuccess: false,
  mailError: false,
  loadingMail: false,
  numberOfMonths: 2,
};

export default ContactForm;
