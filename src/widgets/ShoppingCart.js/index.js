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
        id.splice(e.target.value, 1);
        removeShoppingCart(id)
    };
    let getCard= books.filter(item => id.includes(item.id));

    /*Title + Count*/
    let idCount = {};
    id.forEach( a =>(idCount[a] = idCount[a] + 1 || 1));
    let arrId = [];
    for(let key in idCount){
        arrId.push(idCount[key])
    }
    let arrTitle = [];
    for (let key in getCard) {
        arrTitle.push(getCard[key].title)
    }
    let cardTitle = [];
    for (let key in (arrTitle, arrId)){
        cardTitle = cardTitle.concat(arrTitle[key] +' — '+ arrId[key])
    }
    let showCardTitle = cardTitle.map((title, key)=>{
        return <li key={key}>{title}<span onClick={removeBooks}>&#215;</span></li>
    });

    /*Price*/
    let cardPrice = [];
    for (let id in getCard) {
        cardPrice.push(getCard[id].price)
    }
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