import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="keywords" content="crypto, Strapi, review, category" />
        <meta name="description" content="review of crypto and description with Strapi" />
        <meta name="author" content="Satellites web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp