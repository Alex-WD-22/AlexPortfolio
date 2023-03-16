import { useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Button from "@chakra-ui/react";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
  },
});

const Themes = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        {children}
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default Themes;
