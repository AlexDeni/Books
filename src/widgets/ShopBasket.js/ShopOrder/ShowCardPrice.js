import React from "react";
import {Description} from "../../../ui/Description";
import {Price} from "../../../ui/Price";

export const ShowCardPrice = ({selectedBooks}) => {
    let showPrice = selectedBooks.reduce(function(bookPrice, num) {
        return bookPrice + num.price;
    }, 0);
    return <Price price={showPrice} />
};