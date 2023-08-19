import { Component } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { GlobalStyle } from './GlobalStyle';
import { Title1, Title2, Title3 } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} вже є в телефонній книзі!`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  changeContactFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };
  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Title1>Phonebook</Title1>
        <FormContacts onAddContact={this.handleAddContact} />
        <Title2>Contacts</Title2>
        <Title3>Find contacts by name</Title3>
        <ContactFilter value={filter} onChange={this.changeContactFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDelete={this.handleDelete}
        />
        <GlobalStyle />
      </>
    );
  }
}
