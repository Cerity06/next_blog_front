import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Head from 'next/head'
import {API_URL} from '../config/config'

const client = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Head>
        <meta name="keywords" content="crypto, Strapi, review, category" />
        <meta name="description" content="review of crypto and description with Strapi" />
        <meta name="author" content="Satellites web" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  )
}
export default MyApp
