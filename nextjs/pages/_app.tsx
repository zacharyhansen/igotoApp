import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from '../config/firebase.config';
import { CurrentUserProvider } from '../contexts/currentUserContext';

const theme = createTheme();

export interface PageLayoutComponentInterface {
  children: JSX.Element | JSX.Element[];
}

type AppPropsWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<PageLayoutComponentInterface>;
  };
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // authHook();

  return (
    <ThemeProvider theme={theme}>
      <CurrentUserProvider auth={auth}>
        {/* Use the provided pagelayout if it has been attached to the page */}
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </CurrentUserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
