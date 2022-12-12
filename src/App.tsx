import { ThemeProvider } from 'styled-components';

import QuestionsPage from './pages/QuestionsPage';

import themes from './theme';
import './App.css';

import { UserContextProvider } from './context/useUser';
import Footer from './components/Footer';
import { ThemeContextProvider, useTheme } from './context/useTheme';

const App = () => {
  const { themeName } = useTheme();

  return (
    <ThemeProvider theme={themes[themeName]}>
      <UserContextProvider>
        <QuestionsPage />
        <Footer />
      </UserContextProvider>
    </ThemeProvider>
  );
};

const ThemedApp = () => {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
};

export default ThemedApp;
