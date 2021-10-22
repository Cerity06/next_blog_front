import type { GetStaticProps, NextPage } from 'next'
import Cryptos from '../../components/review/cryptos'
import Card from '../../components/ui/card'
import { API_URL } from '../../config/config'
import { getData } from '../../helpers/func'
import { CryptoType } from '../../typescript/types'

const Review: NextPage = (props: any) => {
    const data: CryptoType[]  = props.data;

    return (
      <Card titlePage='Home Page'>
        {data && <Cryptos list={data}/>}
      </Card>
    )
  }
  
  export const getStaticProps: GetStaticProps = async() => {

    // @todo: change by graphql function in func file and adapt it to NextJS
    const data: CryptoType[] | null = await getData(`${API_URL}/reviews`);
  
    if (!data) {
      return {
        notFound: true
      }
    }
  
    return {
      props: {
        data
      }
    }
  }
export default Review