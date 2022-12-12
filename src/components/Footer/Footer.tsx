import React from 'react';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import SwitchButton from '../SwitchButton';

import { Container, IconContainer } from './Footer.styles';
import { useTheme } from '../../context/useTheme';
import { THEMES } from '../../constants';

const Footer = () => {
  const { themeName, toggleTheme } = useTheme();

  const isDark = themeName === THEMES.DARK;

  const handleOnClick = () => {
    toggleTheme?.();
  };

  return (
    <Container>
      <SwitchButton on={isDark} onClick={handleOnClick} />
      <IconContainer>
        {isDark ? (
          <DarkModeRoundedIcon fontSize='large' />
        ) : (
          <LightModeRoundedIcon fontSize='large' />
        )}
      </IconContainer>
    </Container>
  );
};

export default Footer;
