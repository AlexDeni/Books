import React from 'react'
import {Layout} from "../../ui/Layout";
import {RatingSearch} from "./RatingSearch";
import {FilterSearch} from './FilterSearch'

const Filter = ({books, setBooks, setRatingBooks}) => {
    return(
        <Layout direction='row'>
            <FilterSearch book={books} setBooks={setBooks} />
            <RatingSearch  book={books} setRatingBooks={setRatingBooks} />
        </Layout>
    )
}

export {Filter}