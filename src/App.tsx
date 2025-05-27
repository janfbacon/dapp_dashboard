import './App.css';
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, AppBar, Tabs, Tab, Toolbar, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { lightTheme, darkTheme } from './theme/theme';
import Home from './pages/HomePage';
import WalletPage from './pages/WalletPage';

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleTabChange = (_: any, newValue: number) => setTabIndex(newValue);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Tabs value={tabIndex} onChange={handleTabChange} textColor="inherit" sx={{ flexGrow: 1 }}>
            <Tab label="Home" />
            <Tab label="Wallet" />
          </Tabs>
          <IconButton onClick={toggleTheme} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {tabIndex === 0 ? <Home /> : <WalletPage />}
    </ThemeProvider>
  );
}

export default App;
