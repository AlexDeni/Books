import React from 'react'
import {Layout} from "../../ui/Layout";
import PropTypes from 'prop-types';
import {Description} from "../../ui/Description";
import {Rating} from "./Rating";
import {Price} from "../../ui/Price"
import { connect } from "react-redux"
import {actionSetCart} from "../../store/ShoppingCart/actionCart";
import {actionBookProperties} from "../../store/Books/actionBooks";
import { bindActionCreators } from 'redux';
import {Link} from "react-router-dom";

const Book = ({title, author, image, rating, addInShoppingCart, openBookProperties, curr, price, id }) => {
    const handleChange =(e)=>{
        e.preventDefault();
        addInShoppingCart(id)
    };
    const handleOpen =()=>{
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
                <Layout  justify='spaceBetween' direction='row'>
                    <button onClick={handleChange}>В корзину</button>
                    <Link  to={`/all/${id}`} onClick={handleOpen}><button>Открыть</button></Link>
                </Layout>
            </div>
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
        openBookProperties: bindActionCreators(actionBookProperties, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Book)