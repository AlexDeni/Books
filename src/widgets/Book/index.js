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

const Book = ({title, author, image, rating, addInShoppingCart, openBookProperties, curr, price, id }) => {
    const addInShop =()=>{
        addInShoppingCart(id)
    };
    const openShop =()=>{
        openBookProperties(id)
    };
    console.log("price")
    return(
        <Layout extraClass='book'>
            <img src={image} alt={image} className='listImage'/>
            <div className='bookCard'>
                <Description size='l' position="center">{title}</Description>
                <Rating rating={rating} />
                <Description extraClass='bookAuthor' position="center">{`Автор: ${author}`}</Description>
                <Price currency={curr} price={price} />
                <Layout  justify='space-between' direction='row' extraClass="book-btn">
                    <Button onClick={addInShop} bStyle="main" size="m" >В корзину</Button>
                    <Link  to={`/all/${id}`} onClick={openShop}><Button bStyle="main">Открыть</Button></Link>
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