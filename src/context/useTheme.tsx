import {
  createContext,
  FunctionComponent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { THEMES } from '../constants';
import { switchTheme } from '../utils';

interface ThemeContextProps {
  children: ReactNode;
}

interface ThemeType {
  themeName: THEMES;
  toggleTheme?: () => void;
}

const defaultValue: ThemeType = {
  themeName: THEMES.DARK,
};

const ThemeContext = createContext(defaultValue);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider: FunctionComponent<ThemeContextProps> = ({
  children,
}) => {
  const [themeName, toggle] = useReducer(switchTheme, THEMES.DARK);

  const toggleTheme = useCallback(() => {
    toggle();
  }, []);

  const value = useMemo(
    () => ({
      themeName,
      toggleTheme,
    }),
    [themeName, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default useTheme;
