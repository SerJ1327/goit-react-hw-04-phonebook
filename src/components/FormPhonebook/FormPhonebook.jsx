import { nanoid } from 'nanoid';
import { Component } from 'react';
import { StyledSubmitButton } from './FormPhoneBook.styled';
import {
  StyledFormPhonebook,
  StyledInput,
  StyledInputThumb,
} from 'components/GlobalStyled/Global.styled';

export class FormPhonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.currentContacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === this.state.name.toLocaleLowerCase()
    )
      ? alert(`${this.state.name} is alredy in cotacts`)
      : this.props.createPhoneNumber({
          name: this.state.name,
          number: this.state.number,
          id: nanoid(),
        });

    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    return (
      <StyledFormPhonebook onSubmit={this.handleSubmit}>
        <StyledInputThumb>
          <label htmlFor="handleName">Name</label>
          <StyledInput
            type="text"
            name="name"
            id="handleName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.name}
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
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </StyledInputThumb>

        <StyledSubmitButton type="submit">Add contact</StyledSubmitButton>
      </StyledFormPhonebook>
    );
  }
}
