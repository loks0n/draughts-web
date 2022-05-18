import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Script from 'next/script';

// eslint-disable-next-line react/prop-types
export default function App(props) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-N7EVGCFBVC"
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || []; function
            gtag(){dataLayer.push(arguments);} gtag('js', new Date());
            gtag('config', 'G-N7EVGCFBVC', { page_path:
            window.location.pathname, });
          `,
        }}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d6c420" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Free Online Draughts Game - play against the computer"
        />
        <meta property="og:url" content="https://draughts.org/" />
        <meta property="og:site_name" content="Draughts" />
        <meta
          property="og:description"
          content="Play draughts free online against the computer. Read about Rules and Strategies for Draughts"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Play draughts free online against the computer. Read about Rules and Strategies for Draughts"
        />
        <meta
          name="keywords"
          content="draughts,checkers,free draughts,free checkers,board games,board gaming online,play draughts online,play checkers online,play free games online,free games,online games,online checkers,online draughts"
        />
      </Head>
      <ChakraProvider>
        <props.Component {...props.pageProps} />
      </ChakraProvider>
    </>
  );
}
