import React from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { bindActionCreators } from 'redux';
import {Layout} from "../../ui/Layout";
import {Button} from "../../ui/Button";
import {Description} from "../../ui/Description";
import {Rating} from "./Rating";
import {Price} from "../../ui/Price"
import {actionSetCart} from "../../store/ShoppingCart/actionCart";
import {actionBookProperties} from "../../store/Books/actionBooks";

const Book = ({title, author, image, rating, addInShopCart, openBookProperties, price, id }) => {
    const addInShop =()=>{
        addInShopCart(id)
    };
    const openBook =()=>{
        openBookProperties(id)
    };
    return(
        <Layout extraClass='book'>
            <img src={image} alt={image} className='listImage'/>
            <div className='bookCard'>
                <Description size='l' position="center">{title}</Description>
                <Rating rating={rating} />
                <Description extraClass='bookAuthor' position="center">{`Автор: ${author}`}</Description>
                <Price position="center" size="l" price={price} />
                <Layout  justify='space-between' direction='row' extraClass="book-btn">
                    <Button onClick={addInShop} bStyle="main" size="m" >В корзину</Button>
                    <Link  to={`/all/${id}`} onClick={openBook}><Button bStyle="main">Открыть</Button></Link>
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
};
Book.defaulttypes = {
    author: "Автор",
    rating: 0,
    price: 0
};

function mapDispatchToProps(dispatch) {
    return {
        addInShopCart: bindActionCreators(actionSetCart, dispatch),
        openBookProperties: bindActionCreators(actionBookProperties, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Book)