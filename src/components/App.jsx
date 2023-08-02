import { useState, useEffect } from 'react';
import { SectionPhonebook, SectionContacts } from './Section/Sections';

import { FormPhonebook } from './FormPhonebook/FormPhonebook';

import { ContactList } from './ContactList/ContactList';
import { FilterContacs } from './FilterContacs/FilterContacs';
import { StyledApp } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const createPhoneNumber = data => {
    !contacts ? setContacts([data]) : setContacts(prev => [data, ...prev]);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  // !_____________________________
  // const newState = state => {};

  const deleteContact = id => {
    const arr = contacts.filter(contact => contact.id !== id);
    setContacts(arr);
    setFilter('');
  };

  useEffect(() => {
    const stryngifiedContacts = localStorage.getItem('contacts');
    const currentContacts = JSON.parse(stryngifiedContacts) ?? [];
    setContacts(currentContacts);
  }, []);

  useEffect(() => {
    const stryngifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stryngifiedContacts);
  }, [contacts]);

  return (
    <StyledApp>
      <SectionPhonebook title="Phonebook">
        <FormPhonebook
          createPhoneNumber={createPhoneNumber}
          currentContacts={contacts}
        />
      </SectionPhonebook>

      <SectionContacts title="Contacts">
        <FilterContacs filter={filter} handleFilter={handleFilter} />
        <ContactList deleteContact={deleteContact} filter={filterContacts()} />
      </SectionContacts>
    </StyledApp>
  );
};
