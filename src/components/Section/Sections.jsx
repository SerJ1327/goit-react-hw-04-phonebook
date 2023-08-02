import PropTypes from 'prop-types';

import { StyledSection } from './Section.styled';

export const SectionPhonebook = ({ title, children }) => {
  return (
    <StyledSection>
      <h1>{title}</h1>
      {children}
    </StyledSection>
  );
};

export const SectionContacts = ({ title, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};

SectionPhonebook.propTypes = {
  title: PropTypes.string,
};

SectionContacts.propTypes = {
  title: PropTypes.string,
};
