import React,{useState} from 'react'
import { connect } from "react-redux"
import {Description} from "../../ui/Description";
import {Layout} from "../../ui/Layout";
import { bindActionCreators } from 'redux';
import {actionRemoveBook} from '../../store/ShoppingCart/actionRemoveBook'
import shoppingCart from '../../static/busket.png'
import './style.scss'

function ShoppingCart({title, count, removeShoppingCart, price}) {
    const[cartActive, chooseCart] = useState(false);

    const removeBooks = e =>{
        title.splice(e.target.value, 1)
        removeShoppingCart(title)
    }
    let resultTitle = title.map((title, key)=>{
        return <li key={key}>{title}<span onClick={removeBooks}>&#215;</span></li>
    });
    return(
        <Layout extraClass='shoppingCart'>
            <Layout>
                <img src={shoppingCart} width='80px' alt='busket' onClick={() => chooseCart(!cartActive)} />
                <Description extraClass='countCart'>{count}</Description>
            </Layout>
            {cartActive &&
                <Layout extraClass='chooseCart'>
                    {resultTitle}
                    <Description>{price}</Description>
                </Layout>
            }
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        title: state.orderBooks.title,
        price: state.orderBooks.price,
        count: state.orderBooks.count,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        removeShoppingCart: bindActionCreators(actionRemoveBook, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)