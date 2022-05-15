import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { App, AppContainer } from './app/app';
import { RecoilRoot } from 'recoil';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7db53f',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#150329',
    },
  },
};

const theme = createTheme(themeOptions);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);
