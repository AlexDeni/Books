import React from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { bindActionCreators } from 'redux';
import {Layout} from "../../ui/Layout";
import {Description} from "../../ui/Description";
import {Rating} from "./Rating";
import {Price} from "../../ui/Price"
import {actionSetCart} from "../../store/ShoppingCart/actionCart";
import {actionBookProperties} from "../../store/Books/actionBooks";

const Book = ({title, author, image, rating, addInShoppingCart, openBookProperties, curr, price, id }) => {
    const addInShop =(e)=>{
        e.preventDefault();
        addInShoppingCart(id)
    };
    const openShop =()=>{
        openBookProperties(id)
    };
    return(
        <Layout extraClass='book'>
            <img src={image} alt={image} className='listImage'/>
            <div className='bookCard'>
                <Description size='l' color='dark'>{title}</Description>
                <Rating rating={rating} />
                <Description extraClass='bookAuthor'>{`Автор: ${author}`}</Description>
                <Price currency={curr} price={price} />
                <Layout  justify='space-between' direction='row'>
                    <button onClick={addInShop}>В корзину</button>
                    <Link  to={`/all/${id}`} onClick={openShop}><button>Открыть</button></Link>
                </Layout>
            </div>
        </Layout>
    )
};

Book.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    author: PropTypes.string,
    rating: PropTypes.number,
    curr: PropTypes.oneOf(['UA', '$', '€'])
};
Book.defaulttypes = {
    author: "Автор",
    rating: 0,
    curr: 'UA',
    price: 0
};

function mapDispatchToProps(dispatch) {
    return {
        addInShoppingCart: bindActionCreators(actionSetCart, dispatch),
        openBookProperties: bindActionCreators(actionBookProperties, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Book)