import React from 'react'
import {Layout} from "../../ui/Layout";
import PropTypes from 'prop-types';
import {Description} from "../../ui/Description";
import {Rating} from "./Rating";
import {Price} from "../../ui/Price"
import { connect } from "react-redux"
import {actionSetCart} from "../../store/ShoppingCart/actionSetCart";
import { bindActionCreators } from 'redux';

const Book = ({title, author, image, rating, addInShoppingCart, curr, price }) => {
    const handleChange =(e)=>{
        e.preventDefault();
        addInShoppingCart(title, price)
    };
    return(
        <Layout extraClass='book'>
            <img src={image} alt={image} className='listImage'/>
            <Layout extraClass='bookCard'>
                <Description size='l' color='dark' extraClass='bookTitle'>{title}</Description>
                <Rating rating={rating} />
                <Description extraClass='bookAuthor'>{`Автор: ${author}`}</Description>
                <Layout>
                    <Price currency={curr} price={price} />
                    <button onClick={handleChange}>В корзину</button>
                </Layout>
            </Layout>
        </Layout>
    )
};

Book.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number
};
Book.defaulttypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    rating: 0,
};

function mapDispatchToProps(dispatch) {
    return {
        addInShoppingCart: bindActionCreators(actionSetCart, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(Book)