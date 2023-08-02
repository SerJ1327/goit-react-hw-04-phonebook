import { Component } from 'react';
import { SectionPhonebook, SectionContacts } from './Section/Sections';

import { FormPhonebook } from './FormPhonebook/FormPhonebook';

import { ContactList } from './ContactList/ContactList';
import { FilterContacs } from './FilterContacs/FilterContacs';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createPhoneNumber = data => {
    !this.state.contacts
      ? this.setState({ contacts: [data] })
      : this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  handleFilter = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  newState = state => {};

  deleteContact = id => {
    const arr = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: arr, filter: '' });
  };

  componentDidMount() {
    const stryngifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stryngifiedContacts) ?? [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const stryngifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stryngifiedContacts);
    }
  }

  render() {
    return (
      <StyledApp>
        <SectionPhonebook title="Phonebook">
          <FormPhonebook
            createPhoneNumber={this.createPhoneNumber}
            currentContacts={this.state.contacts}
          />
        </SectionPhonebook>

        <SectionContacts title="Contacts">
          <FilterContacs state={this.state} handleFilter={this.handleFilter} />
          <ContactList
            deleteContact={this.deleteContact}
            filter={this.filterContacts()}
          />
        </SectionContacts>
      </StyledApp>
    );
  }
}
