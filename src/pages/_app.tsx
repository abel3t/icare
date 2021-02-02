import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import AppLayout from 'layouts/AppLayout';

import { lightTheme, darkTheme } from 'settings/theme';

import 'antd/dist/antd.css';

export default function App ({ Component, pageProps }) {
  const [ theme, setTheme ] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <AppLayout>
        <Component
          { ...pageProps }
        />
      </AppLayout>
    </ThemeProvider>
  );
}