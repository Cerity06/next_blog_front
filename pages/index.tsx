import type { GetServerSideProps, NextPage } from 'next'
import Cryptos from '../components/category/cryptos'
import Card from '../components/ui/card'
import { API_URL } from '../config/config'
import useFetch from '../hooks/useFetch'
import { CryptoType } from '../typescript/types'

const Home: NextPage = (props: any) => {
  const data: CryptoType[] = props.data;
  const loading: boolean = props.loading;
  const error: Error | null = props.error;

  return (
    <Card titlePage='Home Page'>
      {error != null && <p>Something went wrong!</p>}
      {loading && <p>loading...</p>}
      {data && <Cryptos list={data}/>}
    </Card>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const {data, loading, error} = useFetch(`${API_URL}/review`);

  return {
    props: {
      data,
      loading,
      error,
    }
  }
}

export default Home
