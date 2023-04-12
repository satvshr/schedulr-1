import React from "react";
import "./styles.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const MyApp = ({ Component, pageProps }) => {
  return (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
  )
}
export default MyApp