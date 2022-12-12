import React, { FunctionComponent } from 'react';

import { Background, Container, Status } from './ProgressBar.styles';

export interface ProgressBarProps {
  stepsCompleted: number;
  maxSteps: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = (props) => {
  return (
    <Container>
      <Background>
        <Status {...props} />
      </Background>
    </Container>
  );
};

export default ProgressBar;
