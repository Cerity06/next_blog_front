import { CryptoType } from "../typescript/types";
import {useQuery, gql} from '@apollo/client'
import { API_URL } from "../config/config";

const REVIEWS = gql`
query GetReviews {
    reviews {
      title,
      id,
      rating,
      body,
    }
}
`

export const getData = async (url: string) => {
    const res = await fetch(url);
    let data: CryptoType[] = [];

    try {
        data = await res.json();
    } catch (error) {
        return null
    }
    return data
}

export const getGraphQlData = async() => {
    const {data, loading, error} = useQuery(REVIEWS);

    return {data, loading, error}
}


