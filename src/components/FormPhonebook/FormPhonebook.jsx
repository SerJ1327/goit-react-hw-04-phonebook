import { nanoid } from 'nanoid';
import { useState } from 'react';
import { StyledSubmitButton } from './FormPhoneBook.styled';
import {
  StyledFormPhonebook,
  StyledInput,
  StyledInputThumb,
} from 'components/GlobalStyled/Global.styled';

export const FormPhonebook = ({ createPhoneNumber, currentContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    currentContacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    )
      ? alert(`${name} is alredy in cotacts`)
      : createPhoneNumber({
          name,
          number,
          id: nanoid(),
        });

    setName('');

    setNumber('');
  };

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        return;
    }
  };

  return (
    <StyledFormPhonebook onSubmit={handleSubmit}>
      <StyledInputThumb>
        <label htmlFor="handleName">Name</label>
        <StyledInput
          type="text"
          name="name"
          id="handleName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          required
        />
      </StyledInputThumb>

      <StyledInputThumb>
        <label htmlFor="handleNumber">Number</label>
        <StyledInput
          type="tel"
          name="number"
          id="handleNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={number}
          required
        />
      </StyledInputThumb>

      <StyledSubmitButton type="submit">Add contact</StyledSubmitButton>
    </StyledFormPhonebook>
  );
};
