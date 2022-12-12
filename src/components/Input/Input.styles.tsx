import styled from 'styled-components';

import { InputProps } from './Input';

export const StyledInput = styled.input<Pick<InputProps, 'error'>>`
  height: 75px;
  width: 100%;
  font-size: 30px;
  padding: 0 0.75rem;
  outline: none;
  font-weight: bold;

  ${({ theme, error }) => `
    border: 3px solid ${error ? '#FF726F' : 'transparent'};
    background-color: ${theme.background.input};
    color: ${theme.font.input};
    caret-color: ${theme.font.input};

  `}

  @media only screen and (max-width: 600px) {
    height: 35px;
    font-size: 20px;
  }
`;

export const InputContainer = styled.div``;
