import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router/router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthContext, AuthContextProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="493069965473-1ckq5kooh27tju84oiudu9lvi49mojrn.apps.googleusercontent.com">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
