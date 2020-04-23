import React from "react";
import {Link} from "react-router-dom";
import {connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import {bindActionCreators} from "redux";
import {actionSetCart} from "../../store/ShoppingCart/actionCart";
import {Button} from "../../ui/Button";
import "./style.scss"
import {Description} from "../../ui/Description";
import {Price} from "../../ui/Price";
import {Title} from "../../ui/Title";

function BookProperties({id, books, addInShoppingCart}) {
    let bookInfo= books.find(item => item.id === id);
    const handleChange =(e)=>{
        e.preventDefault();
        addInShoppingCart(id)
    };

    return (
        <Layout extraClass="container book-info listBooks">
            {bookInfo ? <Layout wrap="wrap" direction="row">
                    <Layout>
                        <img src={bookInfo.image} alt={bookInfo.title}/>
                        <Link to='/all' className="property-goBack"><span>&#8592;</span>Back</Link>
                    </Layout>
                    <Layout extraClass="book-extra-info">
                        <Title tagName="h1" color="blue">{bookInfo.title}</Title>
                            <Price size="l" price={bookInfo.price} />
                            <Button extraClass="btn_order_info" onClick={handleChange} bStyle="main" size='m' >В корзину</Button>
                        <Layout extraClass="book_info-item">
                            <Layout extraClass="title_line">
                                <Description size="l">Информация</Description>
                            </Layout>
                            <Layout direction="row">
                                <span>Автор</span>
                                <Description weight="600">{bookInfo.author}</Description>
                            </Layout>
                            <Layout direction="row">
                                <span>Рейтинг</span>
                                <Description weight="600">{bookInfo.rating}</Description>
                            </Layout>
                        </Layout>
                        <Layout extraClass="book_info-item">
                            <Layout extraClass="title_line">
                                <Description size="l" className="additional-info">Описание</Description>
                            </Layout>
                            <Description extraClass="extra-info" size="m">{bookInfo.info}</Description>
                        </Layout>
                    </Layout>
                </Layout>
                : <Description size="l">Sorry, but the book was not found</Description>}
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        id: state.getBooks.id,
        books: state.getBooks.books
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addInShoppingCart: bindActionCreators(actionSetCart, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (BookProperties)