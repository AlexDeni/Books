import React from "react";

function Rating({rating}) {
    let ratings = [];
    if(rating !== null && rating <= 5 ) {
        for (let i = 0; i < rating; i++) {
            ratings.push(<label key={i} className='active-label'/>)
        }
    }
    else if(rating>5){
        for (let i = 0; i < 5; i++) {
            ratings.push(<label key={i} className='active-label'/>)
        }
    }
    while (ratings.length < 5) {
        ratings.push(<label key={ratings.length}/>)
    }

    return(
        <React.Fragment>
            <div className="rating-area">
                {ratings}
            </div>
        </React.Fragment>
    )
}

export {Rating}