import React from 'react'
import {connect } from "react-redux"
import {Description} from "../../ui/Description";
import {Layout} from "../../ui/Layout";
import { bindActionCreators } from 'redux';
import {actionRemoveBook} from '../../store/ShoppingCart/actionCart'
import {ShowCardPrice} from "./ShowCardPrice";
import {ShowTitleCount} from "./ShowTitleCount";
import shoppingCart from '../../static/busket.png'
import './style.scss'

function ShoppingCart({id, books, count, removeShoppingCart, onShopClick}) {
    const removeBooks = e => {
        id.splice(e.target.value, 1);
        removeShoppingCart(id)
    };
    let getCard = [];
    for(let i in id){
        getCard.push(books.filter(items => items.id === id[i]))
    }

    return(
        <Layout extraClass='shoppingCart'>
            <Layout direction="row">
                <img src={shoppingCart} alt='busket' onClick={() => onShopClick(true)} />
                <Description extraClass="countCart">{count}</Description>
            </Layout>

                <Layout extraClass='chooseCart'>
                    <ShowTitleCount getCard={getCard} removeCart={removeBooks} id={id} />
                    <ShowCardPrice getCard={getCard} />
                </Layout>

        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        id: state.orderBooks.id,
        books: state.getBooks.books,
        count: state.orderBooks.count,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        removeShoppingCart: bindActionCreators(actionRemoveBook, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)