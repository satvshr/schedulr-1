import "./styles.css";
import React from "react";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import ContextWrapper from './context/ContextWrapper';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextWrapper>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ContextWrapper>
  )
}
export default MyApp;