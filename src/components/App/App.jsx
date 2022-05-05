import React, { useState, useEffect } from 'react';

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

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
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

export default App;
