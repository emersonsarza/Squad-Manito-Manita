import styled from 'styled-components';

export const Container = styled.div<{ on?: boolean }>`
  background-color: pink;
  height: 16px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ theme, on }) => `
      background-color: ${theme.background.input};
      ${on ? 'justify-content:  flex-end;' : ''};
  `}
`;

export const Indicator = styled.div`
  background-color: black;
  height: 20px;
  width: 20px;
  display: flex;

  ${({ theme }) => `
    background-color: ${theme.background.pathBar};
  `}
`;
