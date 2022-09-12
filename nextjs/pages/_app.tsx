import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { auth } from '../config/firebase.config';
import { CurrentUserProvider } from '../contexts/currentUserContext';
import { UIControllerProvider } from '../contexts/uiContext';
import Theme from '../theme';
import CssBaseline from '@mui/material/CssBaseline';

export interface PageLayoutComponentInterface {
  children: JSX.Element | JSX.Element[];
}

type AppPropsWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<PageLayoutComponentInterface>;
  };
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider theme={Theme}>
      <UIControllerProvider>
        <CurrentUserProvider auth={auth}>
          {/* Use the provided pagelayout if it has been attached to the page */}
          <CssBaseline />
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </CurrentUserProvider>
      </UIControllerProvider>
    </ThemeProvider>
  );
}

export default MyApp;
