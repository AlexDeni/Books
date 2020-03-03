import React from 'react'
import {Layout} from "../../ui/Layout";
import {RatingSearch} from "./RatingSearch";
import SearchFilter from './SearchFilter'


function Filter({books, setBooks}) {
    return(
        <Layout direction='row'>
            <SearchFilter  book={books} setBooks={setBooks} />
            <RatingSearch  book={books} setBooks={setBooks} />
        </Layout>
    )
}

export {Filter}