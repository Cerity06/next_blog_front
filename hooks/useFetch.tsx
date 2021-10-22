import {useEffect, useState} from 'react'

export const useFetch = (url: string) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const res = fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => setError(error));

        setLoading(false)

        return () => {} // cleanup 
    }, [url])

    return {data, error, loading}; 
}
