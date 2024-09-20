import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="forest">
        <Head>
          <link rel="icon" href="/icon.ico" />
          <meta
            name="description"
            content="A collection of photos and writing from the best four days (and the best 4 passes) of the summer of '23."
          />
          <meta
            property="og:description"
            content="A collection of photos and writing from the best four days (and the best 4 passes) of the summer of '23."
          />
          <meta property="og:title" content="Four Days on the Four Pass Loop" />
          <meta property="og:image" content="/og-image.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Four Days on the Four Pass Loop" />
          <meta
            name="twitter:description"
            content="A collection of photos and writing from the best four days (and the best 4 passes) of the summer of '23."
          />
          <meta name="twitter:image" content="/og-image.png" />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
