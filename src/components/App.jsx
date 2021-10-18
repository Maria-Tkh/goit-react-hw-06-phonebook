import { Component } from 'react';
import ContactForm from './СontactForm/СontactForm';
import ContactList from './СontactList/СontactList';
import Filter from './Filter/Filter';
import { PhonebookTitle, ContactTitle } from './App.styled';

export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  // filter: '',
  // };

  // componentDidMount() {
  //   const json = localStorage.getItem('contacts');
  //   const contacts = JSON.parse(json);
  //   if (contacts) {
  //     this.setState(() => ({ contacts }));
  //   }
  // }
  // componentDidUpdate() {
  //   const json = JSON.stringify(this.state.contacts);
  //   localStorage.setItem('contacts', json);
  // }

  // formSubmitHandler = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const newContact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   contacts.some(contact => contact.name === newContact.name)
  //     ? alert(`${newContact.name} is already in contacts`)
  //     : this.setState(({ contacts }) => ({
  //         contacts: [newContact, ...contacts],
  //       }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  //   console.log(e.currentTarget.value);
  // };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // };

  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    // const { filter } = this.state;

    // const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
        <ContactTitle>Contacts</ContactTitle>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
