// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Favicon icon */}
        <link rel="icon" href="/images/leruofoundationicon.png" type="image/png" />
        {/* Optional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#48101f" />
        <meta name="description" content="Leruo Foundation - Building Wealth For The Next Generations" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
