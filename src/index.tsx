import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './pages';
import { AppApolloProvider, ThemeProvider } from './providers';
import reportWebVitals from './reportWebVitals';

if (process.env.REACT_APP_MOCK_API) {
  require('./graphql/__mocks__/listen');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppApolloProvider>
        <App />
      </AppApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
