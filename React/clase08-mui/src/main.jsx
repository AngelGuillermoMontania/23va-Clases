import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
     colorSchemes: {
        dark: true,
      },
    secondary: {
      main: "#FF2222"
    },
    chimichurri: {
      main: "#00FF55",
      dark: "#000000",
      light: '#E9DB5D',
      contrastText: '#242105',
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
