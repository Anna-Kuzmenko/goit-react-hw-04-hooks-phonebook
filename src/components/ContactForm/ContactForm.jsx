import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { Form, Label, Button, Input } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const nameId = nanoid();
  const telId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendleNameChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const hendleSbmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <Form onSubmit={hendleSbmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          id={nameId}
          onChange={hendleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor={telId}>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          id={telId}
          onChange={hendleNameChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactForm;
