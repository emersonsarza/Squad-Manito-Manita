import React, { FunctionComponent } from 'react';

import { Container, Indicator } from './SwitchButton.styles';

interface SwitchButtonProps {
  on?: boolean;
  onClick?: () => void;
}

const SwitchButton: FunctionComponent<SwitchButtonProps> = ({
  on,
  onClick,
}) => {
  return (
    <Container onClick={onClick} on={on}>
      <Indicator />
    </Container>
  );
};

export default SwitchButton;
