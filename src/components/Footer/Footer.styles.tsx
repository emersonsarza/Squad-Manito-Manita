import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    background-color: ${theme.background.default};
    color: ${theme.font.default};
  `}
`;

export const IconContainer = styled.div`
  margin: 0 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
