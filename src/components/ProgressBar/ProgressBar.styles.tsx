import styled from 'styled-components';

import { ProgressBarProps } from './ProgressBar';

export const Container = styled.div`
  height: 8px;

  @media only screen and (max-width: 600px) {
    height: 4px;
  }
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  padding: 2px;
  ${({ theme }) => `
    background-color: ${theme.background.pathBar};
  `}
`;

export const Status = styled.div<ProgressBarProps>`
  height: 100%;
  border-radius: 2px;
  width: ${({ stepsCompleted, maxSteps }) =>
    `${(stepsCompleted / maxSteps) * 100}%`};
  ${({ theme }) => `
    background-color: ${theme.background.statusBar};
  `}
  cubic-bezier(.47,1.64,.41,.8);
  transition: width 0.5s ease-in;
`;
