// src/components/Divider.js
import styled from 'styled-components';

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ccc;
  }
  &::before {
    margin-right: 0.5rem;
  }
  &::after {
    margin-left: 0.5rem;
  }
`;

export default Divider;
