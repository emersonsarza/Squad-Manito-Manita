import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    background-color: ${theme.background.default};
    color: ${theme.font.default};
  `}
`;

export const DisplayContainer = styled.div<{ show: boolean }>`
  display: flex;

  ${({ show }) =>
    !show
      ? `
    display: none;
  `
      : ''}

  transition: display 1s ease-in-out;
`;
