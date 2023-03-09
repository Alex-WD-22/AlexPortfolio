import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Themes = ({ children }) => {
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#3f51b5',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#3f51b5',
      },
    },
  });

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      {children}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </ThemeProvider>
  );
};

export default Themes;
