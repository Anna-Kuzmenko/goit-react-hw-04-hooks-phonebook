import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { Form, Label, Button, Input } from './ContactForm.styled';

class ContactForm extends Component {
  nameId = nanoid();
  telId = nanoid();

  state = {
    id: '',
    name: '',
    number: '',
  };

  hendleNameChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSbmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.hendleSbmit}>
        <Label htmlFor={this.nameId}>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            id={this.nameId}
            onChange={this.hendleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.telId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            id={this.telId}
            onChange={this.hendleNameChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactForm;
