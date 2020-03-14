import React from 'react'
import {Layout} from "../../ui/Layout";
import {RatingSearch} from "./RatingSearch";
import {SearchBooks} from './SearchBooks'

const Filter = ({books, setBooks, setRatingBooks}) => {
    return(
        <Layout direction='row'>
            <SearchBooks  book={books} setBooks={setBooks} />
            <RatingSearch  book={books} setRatingBooks={setRatingBooks} />
        </Layout>
    )
}

export {Filter}