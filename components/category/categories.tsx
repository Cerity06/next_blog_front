import React, {Fragment} from 'react'
import { Category } from '../../typescript/types'
import Link from 'next/link'
import classes from './categories.module.css'

const Categories: React.FC<{categories: Category[]}> = ({categories}) => {
    return (
        <div className={classes.category}>
            <p>Review: </p>
            {categories && categories.map((category: Category) => ( 
                <Link href={`/category/${category.id}`} key={category.id}><a> {category.name} </a></Link>
                ))}
        </div>
    )
}

export default Categories
