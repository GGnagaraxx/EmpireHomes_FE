import React from 'react'
import AppRouter from './components/shared/AppRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import store from './common/redux/store';

const custTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#fbc02d',
        },
        secondary: {
          main: '#ffa726',
        },
      },
      text: {
        secondary: 'rgba(26,26,26,0.54)',
        disabled: 'rgba(47,47,47,0.38)',
      },
});

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={custTheme}>
                <CssBaseline/>
                <div className='page'>
                    <AppRouter />
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App;