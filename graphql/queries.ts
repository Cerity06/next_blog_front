import {ApolloClient, gql, InMemoryCache} from '@apollo/client'

export const getClientGql = () => {
  const client = new ApolloClient({
    uri: process.env.GQL_URL,
    cache: new InMemoryCache()
})

  return client; 
}

export const REVIEWS = gql`
  query GetReviews {
    reviews {
      title,
      id,
      rating,
      body,
    categories {
      id, 
      name,
    }
  }
}
`

export const REVIEW = gql`
  query GetReviews($id: ID!) {
    review(id: $id) {
      title,
      id,
      rating,
      body,
  }
}
`