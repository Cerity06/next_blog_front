import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { CryptoType } from '../../typescript/types'
import Card from '../../components/ui/card'
import CryptoDetails from '../../components/review/cryptoDetails'
import { getClientGql, REVIEWS } from '../../graphql/queries'

type Props = {
    element: CryptoType[];
    loading: boolean;
}

const detailPage: NextPage<Props> = (props) => {
    const { element , loading} = props;
    return (
        <Card titlePage={`details on ${element[0].title}`}>
            {loading && <p>loading...</p>}
            {element && <CryptoDetails crypto={element[0]}/>}
        </Card>
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const client = getClientGql();

    const { data, error, loading } = await client.query({query : REVIEWS })

    const elements: CryptoType[] = data.reviews;

    if (error) {
        return {
            notFound: true,
        }
    }

    let element: CryptoType[] = elements.filter(review => {return  review.id.toString() === params!.id})

    return {
        props: {
            element,
            loading,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const client = getClientGql();

    const { data } = await client.query({query : REVIEWS })

    const reviews: CryptoType[] = data.reviews;
    const paths = reviews!.map((review) => ({
        params: { id: review.id.toString() },
      }))
    
      return { paths, fallback: false }
}

export default detailPage
