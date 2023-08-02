import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledInput,
  StyledInputThumb,
} from 'components/GlobalStyled/Global.styled';

export const FilterContacs = ({ handleFilter, filter }) => {
  return (
    <StyledForm>
      <StyledInputThumb>
        <label htmlFor="handleFilter">Find contact by name</label>
        <StyledInput
          type="text"
          name="filter"
          id="handleFilter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleFilter}
          value={filter}
          required
        />
      </StyledInputThumb>
    </StyledForm>
  );
};

FilterContacs.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
