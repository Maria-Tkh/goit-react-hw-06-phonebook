// import { Component } from 'react';
import ContactForm from './СontactForm/СontactForm';
import ContactList from './СontactList/СontactList';
import Filter from './Filter/Filter';
import { PhonebookTitle, ContactTitle } from './App.styled';

const App = () => {
  return (
    <div>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
