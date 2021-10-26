import React from 'react'
import { CryptoType } from '../../typescript/types'
import Card from '../ui/card'
import classes from './crypto.module.css'

const CryptoDetails: React.FC<{crypto: CryptoType}> = ({crypto}) => {
 
    return (
        <Card titlePage={null}>
            <div className={classes.element}>
                <h3>{crypto.rating}</h3>
                <h1>{crypto.title}</h1>
                <p>{crypto.body}</p>
            </div>
        </Card>
    )
}

export default CryptoDetails
