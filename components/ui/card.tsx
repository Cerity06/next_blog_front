import React, {Fragment} from 'react'
import classes from './card.module.css'
import Head from 'next/head'

const Card: React.FC<{titlePage: string | null, children: React.ReactNode}> = ({titlePage, children}) => {

    return (
        <Fragment>
            {titlePage && (
                <Head>
                    <title>{titlePage}</title>
                </Head>
                    )}
            <div className={classes.card}>
                {children}
            </div>
        </Fragment>
    )
}

export default Card
