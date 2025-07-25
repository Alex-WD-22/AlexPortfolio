import "@/styles/globals.css";
import Layout from "components/Layout/Layout";
import { ThemeProvider } from "next-themes";
import "@/styles/theme.css";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider 
      attribute="data-theme" 
      defaultTheme="system"
      enableSystem
      enableColorScheme
    >
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}
