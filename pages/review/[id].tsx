import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { API_URL } from '../../config/config'
import { getData } from '../../helpers/func'
import { CryptoType } from '../../typescript/types'
import Card from '../../components/ui/card'
import CryptoDetails from '../../components/review/cryptoDetails'

const detailPage: NextPage = (props: any) => {
    const crypto: CryptoType = props.element[0];
    
    return (
        <Card titlePage={`details on ${crypto.title}`}>
            <CryptoDetails crypto={crypto}/>
        </Card>
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const data: CryptoType[] | null = await getData(`${API_URL}/reviews`);

    if (!data) {
        return {
            notFound: true,
        }
    }

    const element: CryptoType[] = data?.filter(review => {
        return review.id.toString() === params!.id
    })


    return {
        props: {
            element
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data: CryptoType[] | null = await getData(`${API_URL}/reviews`);



    const paths = data!.map((crypto) => ({
        params: { id: crypto.id.toString() },
      }))

      return { paths, fallback: false }
}

export default detailPage
