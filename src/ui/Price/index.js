import React from 'react'
import {Description} from "../Description";
import './style.scss'

//Курс долара
const dol = 25;
//Курс евро
const eur = 27.5

function getCurrencySymbol(currency) {
    switch (currency) {
        case('UA'):
            return <span>грн.</span>
        case('USD'):
            return <span>&#36;</span>
        case('EUR'):
            return <span>&#8364;</span>
        default:
            return <span>&#8372;</span>
    }
}

function getCurrencyPrice(currency, price) {
    switch (currency ) {
        case('UA'):
            return Math.floor(price)
        case('USD'):
            return Math.floor(price/dol)
        case('EUR'):
            return Math.floor(price/eur)
        default: return Math.floor(price)
    }
}


function Price({currency, price}) {
    return(
        <React.Fragment>
            <Description size='l' position="center">
                {getCurrencyPrice(currency, price)}
                {getCurrencySymbol(currency)}
            </Description>
        </React.Fragment>
    )
}

export {Price}