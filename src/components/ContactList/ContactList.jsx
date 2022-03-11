import React from 'react';
import PropTypes from 'prop-types';

import ContItem from '../ContactItem/ContactItem';

import { ConList } from './ContactList.styled';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ConList>
      {contacts.map(({ id, name, number }) => (
        <ContItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        ></ContItem>
      ))}
    </ConList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
