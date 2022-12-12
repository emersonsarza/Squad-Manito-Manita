import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    background-color: ${theme.background.default};
    color: ${theme.font.default};
  `}
`;
