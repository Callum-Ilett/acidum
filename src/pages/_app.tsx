import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global-styles";
import darkTheme from "theme/dark";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
