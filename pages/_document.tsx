import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="forest">
        <Head>
          <link rel="icon" href="/icon.ico" />
          <meta
            name="description"
            content="A collection of photos from the best four days (and the best 4 passes) of the summer of '23."
          />
          {/* <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="See pictures from Next.js Conf and the After Party."
          />
          <meta property="og:title" content="Next.js Conf 2022 Pictures" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Next.js Conf 2022 Pictures" />
          <meta
            name="twitter:description"
            content="See pictures from Next.js Conf and the After Party."
          /> */}
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
