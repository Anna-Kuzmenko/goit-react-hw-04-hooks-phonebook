import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { Container, PhonebookTitle, ContactListTitle } from './App.styled';

import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const addedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (addedContact) {
      alert(name + ' is already in contacts.');
    } else {
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log('выполнился Юз');

    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('выполнился Юз');
  }, [contacts]);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={addContact} />
      <ContactListTitle>Contacts</ContactListTitle>
      <Filter filterValue={filter} onChangeFilter={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

App.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ),
      filter: PropTypes.string.isRequired,
    })
  ),
};

export default App;
