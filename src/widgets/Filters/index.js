import React from 'react'
import {Layout} from "../../ui/Layout";
import {RatingSearch} from "./RatingSearch";
import {FilterSearch} from './FilterSearch'

const Filter = ({books,setBooks, updateBooks, setRatingBooks}) => {
    return(
        <Layout direction='row'>
            <FilterSearch books={books} updateBooks={updateBooks} />
            <RatingSearch  setBooks={setBooks} setRatingBooks={setRatingBooks} />
        </Layout>
    )
}

export {Filter}