import React from 'react'
import { CryptoType } from '../../typescript/types'
import classes from './crypto.module.css'

const Crypto: React.FC<{crypto: CryptoType}> = ({crypto}) => {
    return (
        <div className={classes.element}>
            <h1>{crypto.title}</h1>
            <p>{crypto.review}</p>
            <p>{crypto.description}</p>
        </div>
    )
}

export default Crypto
