import type { GetStaticProps, NextPage } from 'next'
import Cryptos from '../../components/review/cryptos'
import Card from '../../components/ui/card'
import { getClientGql, REVIEWS } from '../../graphql/queries'
import { Props } from '../../typescript/types'

const Review: NextPage<Props> = (props) => {
  const { reviews, loading } = props;

    return (
      <Card titlePage='Home Page'>
        {loading && <p>loading...</p>}
        {reviews && <Cryptos list={reviews}/>}
      </Card>
    )
  }
  
  export const getStaticProps: GetStaticProps = async() => {

    // @todo: change by graphql function in func file and adapt it to NextJS
    //const data: CryptoType[] | null = await getData(`${API_URL}/reviews`);

    const client = getClientGql();

    const { data, error, loading } = await client.query({query : REVIEWS }); 
    const reviews = data.reviews;
  
    if (error) {
      return {
        notFound: true
      }
    }
  
    return {
      props: {
        reviews,
        loading,
      }
    }
  }

export default Review