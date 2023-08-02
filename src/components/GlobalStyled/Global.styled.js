import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledFormPhonebook = styled(StyledForm)`
  border: 1px solid black;
  padding: 10px;
`;

const StyledInputThumb = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: flex-start;
`;

const StyledInput = styled.input`
  width: 200px;
  height: 23px;
`;

export {
  GlobalStyle,
  StyledForm,
  StyledFormPhonebook,
  StyledInputThumb,
  StyledInput,
};
