import React,{useState, useEffect } from 'react'
import {Description} from "../../ui/Description";

function Basket() {
    const[basket, setBasket] = useState(0)

    return(
        <React.Fragment>
            <Description size='l' color='grey'>Корзина({basket})</Description>

        </React.Fragment>
    )
}

export {Basket}