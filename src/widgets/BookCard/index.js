import React from "react";
import {Link} from "react-router-dom";
import {connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import {bindActionCreators} from "redux";
import {actionSetCart} from "../../store/ShoppingCart/actionCart";
import {Button} from "../../ui/Button";
import "./style.scss"
import {Description} from "../../ui/Description";

function BookProperties({id, books, addInShoppingCart}) {
    let openBook= books.filter(item => item.id === id);
    let bookInfo = {};
    for (let id in openBook) {
        bookInfo['title'] = openBook[id].title;
        bookInfo['price'] = openBook[id].price;
        bookInfo['author'] = openBook[id].author;
        bookInfo['image'] = openBook[id].image;
        bookInfo['info'] = openBook[id].info;
    }
    const handleChange =(e)=>{
        e.preventDefault();
        addInShoppingCart(id)
    };
    return (
        <React.Fragment>
            {id ? <Layout>
                    <Description extraClass='book-property-title'>{bookInfo.title}</Description>
                    <Layout extraClass="book-property" justify="space-between" wrap="wrap" direction="row">
                        <img src={bookInfo.image} alt={bookInfo.title}/>
                        <Layout extraClass="book-added-info">
                            <Layout direction='row' extraClass="additional-item">
                                <span className="additional-info">Автор:</span>
                                <Description size="l">{bookInfo.author}</Description>
                            </Layout>
                            <Layout direction='row' extraClass="additional-item" align="center">
                                <span className="additional-info">Цена:</span>
                                <Description size="l">{bookInfo.price}</Description>
                            </Layout>
                            <Layout direction='row' extraClass="additional-item">
                                <span className="additional-info">Все о книге:</span>
                                <Description extraClass="extra-info" size="m">{bookInfo.info}</Description>
                            </Layout>
                            <Button onClick={handleChange} size='m' extraClass='addBookBtn'>В корзину</Button>
                        </Layout>
                    </Layout>
                </Layout>
                : <div>Sorry, but the book was not found</div>}
            <Link to='/all' className="property-goBack"><span>&#8592;</span>Back</Link>
        </React.Fragment>
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