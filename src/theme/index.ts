import lightTheme from './light';
import darkTheme from './dark';

export interface Themes {
  [key: string]: any;
}

const themes: Themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default themes;
