import { Html, Head, Main, NextScript } from 'next/document';
import { colors } from '../site.config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content={colors.INK} />

        {/* Vector mark so it stays crisp at every size. Add favicon.ico too if
            you need to support very old browsers. */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
