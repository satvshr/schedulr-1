import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='w-screen h-screen' lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Raleway&display=swap" rel="stylesheet" />
      <title>Schedulr</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
