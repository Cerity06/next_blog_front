import React from 'react'
import { CryptoType } from '../../typescript/types'
import Crypto from './crypto'
import classes from './crypto.module.css'

const Cryptos: React.FC<{list: CryptoType[]}> = ({list}) => {
    return (
        <div className={classes.elements}>
          {list && list.map((crypto: CryptoType) => {
              <div key={crypto.id}>
                <Crypto crypto={crypto} />
              </div>
          })}
        </div>
    )
}

export default Cryptos
