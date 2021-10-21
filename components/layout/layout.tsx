import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import classes from './layout.module.css'

const Layout = (props: any) => {
    return (
        <div className={classes.layout}>
            <Header />
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
