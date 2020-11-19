import Document, { Html, Head, Main, NextScript } from 'next/document'
import PrismicScript from '../components/PrismicScript'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
          <link rel="icon" href="/favicon.png" type="image/png" />
        </Head>
        <body className='text-black bg-gray'>
          <Main />
          <NextScript />
          <PrismicScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
