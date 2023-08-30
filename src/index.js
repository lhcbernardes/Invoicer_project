import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/auth';
import StateContext from './context/stateContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="256590031195-2om6an3dbfho73v13124ac60e5s7r5cf.apps.googleusercontent.com">
      <AuthContextProvider>
        <StateContext>
          <App />
        </StateContext>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
