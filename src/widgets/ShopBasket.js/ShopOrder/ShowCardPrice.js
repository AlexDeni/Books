import React from "react";
import {Description} from "../../../ui/Description";

export const ShowCardPrice = ({selectedBooks}) => {
    let showPrice = selectedBooks.reduce(function(bookPrice, num) {
        return bookPrice + num.price;
    }, 0);
    return <Description weight="600">{showPrice}</Description>
};