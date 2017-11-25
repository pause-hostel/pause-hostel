import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './contactForm.css';

class ContactForm extends Component {
  state = {
    selectedOption: '',
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };
  render() {
    return (
      <form className="form-wrapper">
        <div>
          <label>Full Name</label>
          <div>
            <input type="text" name="name" placeholder="Full Name" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input type="email" name="email" placeholder="Email" />
          </div>
        </div>
        <div>
          <label>Location</label>
          <div>
            <Select
              name="location"
              value={this.state.value}
              onChange={this.handleChange}
              className="select"
              options={[
                { value: 'chetumal', label: 'Chetumal, Mexico' },
                { value: 'caye caulker', label: 'Caye Caulker, Belize' },
              ]}
            />
          </div>
        </div>
        <div>
          <label>Guests</label>
          <Select
            name="guests"
            value={this.state.value}
            onChange={this.handleChange}
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
          <label>Room Type</label>
          <div>
            <input type="text" name="roomType" placeholder="eg. 6 bed dorm" />
          </div>
        </div>
        <div>
          <label>Message</label>
          <div>
            <textarea
              type="text"
              name="message"
              rows="10"
              cols="40"
              placeholder="Message"
            />
          </div>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
