import React, { useState } from 'react';
import { Button } from '../../ui/Button';

const RatingSearch = ({ setBooks, setRatingBooks }) => {
    const [rating, isToggleRating] = useState(true);
    const handleRatingClick = () => {
        isToggleRating(!rating);
        if (rating) {
            let result = setBooks.sort((prev, next) => next.rating - prev.rating);
            setRatingBooks(result);
        }
        if (!rating) {
            let result = setBooks.sort((prev, next) => prev.rating - next.rating);
            setRatingBooks(result);
        }
    };
    return (
        <Button extraClass="rating_btn" bStyle="main" onClick={handleRatingClick}>
            По рейтингу {rating ? <span>&#11015;</span> : <span>&#11014;</span>}
        </Button>
    );
};

export { RatingSearch };
