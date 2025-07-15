import Router from "./Routes/Router"

import FavoriteContextProvider from "./context/FavoriteContext"

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'light', // Modo claro
    primary: {
      main: '#5FD2C2', // Turquesa suave
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFA26B', // Coral claro
    },
    background: {
      default: '#F5F7FA', // fondo general
      paper: '#ffffff' // cards, modals, etc.
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
     typography: {
    fontFamily: `'Poppins', 'Roboto', 'sans-serif'`,
    h1: { fontWeight: 700, fontSize: '2.2rem' },
    h2: { fontWeight: 600, fontSize: '1.8rem' },
    h3: { fontWeight: 500, fontSize: '1.5rem' },
    body1: { fontSize: '1rem' },
    button: { textTransform: 'none', fontWeight: 500 }
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 20px',
          fontWeight: 600
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
        }
      }
    }
  }
}
});

function App() {

  return (
    <FavoriteContextProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </FavoriteContextProvider>
      
  )
}

export default App
