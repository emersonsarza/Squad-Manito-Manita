import { THEMES } from '../constants';

export const switchTheme = (currentTheme: THEMES) => {
  if (currentTheme === THEMES.LIGHT) {
    return THEMES.DARK;
  }
  return THEMES.LIGHT;
};
