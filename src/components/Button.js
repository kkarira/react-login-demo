// src/components/Button.js
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Button;
