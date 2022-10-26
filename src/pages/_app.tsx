/* eslint-disable @next/next/no-sync-scripts */
import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import AllProviders from 'context'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AllProviders>
        <Head>
          <title>Cannect</title>
          {/*           <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" /> */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <meta
            name="description"
            content="Medicação a base de cannabis para uma vida melhor"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </AllProviders>
    </>
  )
}

export default App
