import React from "react";

export const ShowCardPrice = ({getCard}) => {
    let cardPrice = [];
    for(let i in getCard){
        cardPrice.push(Number(getCard[i].map(item=>item.price)))
    }
    let showPrice = cardPrice.reduce(function(result, num) {
        return result + num;
    }, 0);
    return <>{showPrice}</>
};