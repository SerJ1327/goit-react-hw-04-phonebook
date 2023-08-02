import styled from 'styled-components';

const StyledContactsItems = styled.li`
  padding-left: 20px;
`;

const StyledButton = styled.button`
  width: 50px;
  margin-left: 10px;

  &: hover {
    background-color: rgb(41, 121, 255);
  }
`;

export { StyledButton, StyledContactsItems };
