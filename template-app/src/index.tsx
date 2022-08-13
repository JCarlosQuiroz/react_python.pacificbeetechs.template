import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getInitialResponsiveMode, initializeIcons, mergeStyles } from '@fluentui/react';



initializeIcons();
getInitialResponsiveMode();
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   <React.StrictMode>
   <FluentProvider theme={teamsDarkTheme}>
     <App />
   </FluentProvider>
   </React.StrictMode>,
);


reportWebVitals();