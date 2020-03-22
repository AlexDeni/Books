import React,{useState} from 'react'
import {connect } from "react-redux"
import {Description} from "../../ui/Description";
import {Layout} from "../../ui/Layout";
import { bindActionCreators } from 'redux';
import {actionRemoveBook} from '../../store/ShoppingCart/actionCart'
import shoppingCart from '../../static/busket.png'
import './style.scss'

function ShoppingCart({id, books, count, removeShoppingCart}) {
    const[activeCart, openShoppingCart] = useState(false);
    const removeBooks = e => {
        id.splice(e.target.value, 1)
        removeShoppingCart(id)
    }
    let getCard= books.filter(item => id.includes(item.id))
    let cardTitle = [];
    let cardPrice = [];
    for (let id in getCard) {
        cardTitle.push(getCard[id].title)
        cardPrice.push(getCard[id].price)
    }
    let showCardTitle = cardTitle.map((title, key)=>{
        return <li key={key}>{title}<span onClick={removeBooks}>&#215;</span></li>
    });
    let showCardPrice = cardPrice.reduce(function(result, num) {
        return result + num;
    }, 0);

    return(
        <Layout extraClass='shoppingCart'>
            <Layout>
                <img src={shoppingCart} width='80px' alt='busket' onClick={() => openShoppingCart(!activeCart)} />
                <Description extraClass='countCart'>{count}</Description>
            </Layout>
            {activeCart &&
                <Layout extraClass='chooseCart'>
                    {showCardTitle}
                    <Description size='m' extraClass='cardPrice'>Итого: {showCardPrice}</Description>
                </Layout>
            }
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