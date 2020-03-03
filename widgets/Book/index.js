import React from 'react'
import {Layout} from "../../ui/Layout";
import PropTypes from 'prop-types';
import {Description} from "../../ui/Description";
import {Rating} from "./Rating";

function Book({title, author, image, rating }) {

    return(
        <Layout extraClass='book'>
            <img src={image} alt={image} className='listImage'/>
            <Layout extraClass='bookIndent'>
                <Description size='l' color='dark' extraClass='bookTitle'>{title}</Description>
                <Rating rating={rating} />
                <Description extraClass='bookAuthor'>{`Автор: ${author}`}</Description>
            </Layout>
        </Layout>
    )
}

Book.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    rating: PropTypes.number,
};
Book.defaulttypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    rating: 0,
};


export {Book}