import React from "react";

function getStarsRating() {
    let ratings = [];
    if(rating !== null && rating <= 5 ) {
        for (let i = 0; i < rating; i++) {
            ratings.push(<label key={i} className='active-label'/>)
        }
    }
    else if(rating > 5){
        for (let i = 0; i < 5; i++) {
            ratings.push(<label key={i} className='active-label'/>)
        }
    }
    while (ratings.length < 5) {
        ratings.push(<label key={ratings.length}/>)
    }
    return ratings;
}

function Rating({ rating }) {
    //Review: функциональный подход необходим. Тут тебе надо с 4 по 15 строку вынести наверх в отдельную функцию
    // вызывать эту функцию можно в рендере. Пример выше
    return(
        <React.Fragment>
            <div className="rating-area">
                {getStarsRating(ratings)}
            </div>
        </React.Fragment>
    )
}

export {Rating}