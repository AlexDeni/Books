import React from 'react'
import {Button} from "../../ui/Button";

function RatingSearch({book, setRatingBooks}) {
    const handleChange =(e)=>{
        e.preventDefault();
        let result = book.sort((prev, next) => next.rating - prev.rating)
        setRatingBooks(result)
    };
    return(
        <React.Fragment>
            <Button onClick={handleChange} extraClass='search_btn'>По рейтингу</Button>
        </React.Fragment>
    )
}

export {RatingSearch}