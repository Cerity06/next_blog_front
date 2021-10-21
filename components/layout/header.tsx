import React from 'react'
import classes from './header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={classes.header}>
            <Link href='/'>Home</Link>
            <Link href='/review'>Review</Link>
            <Link href='/category'>Category</Link>
        </div>
    )
}

export default Header
