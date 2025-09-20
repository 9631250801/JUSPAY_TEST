import React, { createContext, useMemo, useState, useContext, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';

const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'light' });

export const useColorMode = () => useContext(ColorModeContext);

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: { main: mode === 'light' ? '#111827' : '#3b82f6' },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#1a1a1a',
      paper: mode === 'light' ? '#ffffff' : '#2d2d2d',
    },
    text: {
      primary: mode === 'light' ? '#0f172a' : '#ffffff',
      secondary: mode === 'light' ? '#475569' : '#9ca3af',
    },
    success: { main: '#10b981' },
    error: { main: '#ef4444' },
    warning: { main: '#f59e0b' },
    divider: mode === 'light' ? '#e2e8f0' : '#374151',
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    h4: { fontWeight: 800 },
    h6: { fontWeight: 600 },
  },
  spacing: 8,
});

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'dark');

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}


