// src/assets/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565C0',
      light: '#42A5F5',
      dark: '#0D47A1',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6F00',
      light: '#FF9800',
      dark: '#E65100',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#00897B',
      light: '#26A69A',
      dark: '#00695C',
    },
    warning: {
      main: '#FFA000',
      light: '#FFB300',
      dark: '#FF6F00',
    },
    info: {
      main: '#7B1FA2',
      light: '#9C27B0',
      dark: '#6A1B9A',
    },
    background: {
      default: '#F5F7FA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Outfit',
      'system-ui',
      '-apple-system',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Manrope, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Outfit, sans-serif',
    },
    body2: {
      fontFamily: 'Figtree, sans-serif',
    },
  },
  shape: {
    // borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 12,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },
  },
});

export default theme;