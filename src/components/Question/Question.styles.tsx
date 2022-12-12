import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  display: grid;
  grid-template-areas: 'question question' 'input next' 'progress .';
  gap: 0.5rem;

  padding: 2rem;
  @media only screen and (max-width: 600px) {
    height: 75px;
  }
`;

export const Question = styled.p`
  grid-area: question;
  margin: 0;
  font-size: 21px;
`;

export const NextButton = styled.button`
  grid-area: next;
  padding: 0 0.5rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => `
    background-color: ${theme.background.pathBar};
    color: ${theme.background.statusBar};

    &:active {
      background-color: ${theme.background.input};
    }
  `}

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

export const ProgressCounter = styled.div`
  grid-area: progress;
  display: flex;
  justify-content: flex-end;
`;

export const InputContainer = styled.div`
  grid-area: input;
`;

export const RequiredIndicator = styled.span`
  padding: 0 0.5rem;
  color: #ff726f;
  font-weight: bold;
`;

export const Completed = styled.div<{ done?: boolean }>`
  position: absolute;
  height: 100%;
  width: 0%;
  left: 0;
  top: 0;

  ${({ done }) =>
    done
      ? `
    width: 100%;
    background-color: #86b049;
  `
      : ''}

  transition: width 0.25s ease-in;
`;
