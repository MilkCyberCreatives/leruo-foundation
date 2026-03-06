import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-ZA">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/leruofoundationicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/leruofoundationicon.png" />
        <meta name="theme-color" content="#48101f" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
