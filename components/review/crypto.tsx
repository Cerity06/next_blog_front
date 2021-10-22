import React from 'react'
import { CryptoType } from '../../typescript/types'
import Card from '../ui/card'
import classes from './crypto.module.css'
import Link from 'next/link'

const Crypto: React.FC<{crypto: CryptoType}> = ({crypto}) => {
 
    return (
        <Card titlePage={null}>
            <div className={classes.element}>
                <h1>{crypto.title}</h1>
                <h2>{crypto.rating}</h2>
                <p>{crypto.body.substring(0, 300)}...</p>
                <Link href={`/review/${crypto.id}`}>Read more</Link>
            </div>
        </Card>
    )
}

export default Crypto
