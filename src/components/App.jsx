import React, { Component } from 'react';
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filterContact: '',
  };

  formSubmitData = ({ id, name, number }) => {
    const newContact = { id, name, number };
    const nameNormalise = name.toLowerCase();
    const alertContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameNormalise)
    );
    alertContact.length
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };
  handleFilter = e => {
    this.setState({
      filterContact: e.currentTarget.value,
    });
  };
  getFilterscontact = () => {
    const { contacts, filterContact } = this.state;
    const toNormaliseFilter = filterContact.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toNormaliseFilter)
    );
  };
  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
const contacts = localStorage.getItem('contacts');
const parceContacts = JSON.parse(contacts);

if (parceContacts) {
  this.setState({contacts: parceContacts})
}
  };
componentDidUpdate(prevProp, prevState)  {
  
  if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
}

  render() {
    const { filterContact } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: "block",
          marginLeft: "20px",
  

          
        }}
      >
        <Section title="Phonebook">
          <Phonebook onSubmit={this.formSubmitData} />
        </Section>
        <Section title="Contacts">
          <Filter value={filterContact} onChange={this.handleFilter} />
          <Contacts
            contacts={this.getFilterscontact()}
            onDelContact={this.delContact}
          />
        </Section>
      </div>
    );
  }
}
export default App;