import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en-ZA">
      <Head>
        <link rel="icon" href="/images/leruofoundationicon.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/leruofoundationicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <meta name="theme-color" content="#48101f" />
        <meta name="application-name" content="Leruo Foundation" />
        <meta name="apple-mobile-web-app-title" content="Leruo Foundation" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
