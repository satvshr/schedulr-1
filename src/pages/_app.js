import { UserProvider } from '@auth0/nextjs-auth0/client';
import ContextWrapper from './context/ContextWrapper';
import React from "react";
import "./styles.css";

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