// src/components/Input.js
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${props => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
`;

export default Input;
