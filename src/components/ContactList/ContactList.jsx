import PropTypes from 'prop-types';
import { StyledButton, StyledContactsItems } from './ContactList.styled';

export const ContactList = ({ filter, deleteContact }) => {
  return (
    <div>
      {filter.map(contact => (
        <StyledContactsItems key={contact.id}>
          {contact.name}: {contact.number}
          <StyledButton onClick={e => deleteContact(contact.id)} type="button">
            Delete
          </StyledButton>
        </StyledContactsItems>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
