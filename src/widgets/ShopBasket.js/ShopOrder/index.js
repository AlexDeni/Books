import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionRemoveBook, actionAddBook } from '../../../store/ShoppingCart/actionCart';
import ShowProduct from './ShowProduct';
import { Layout } from '../../../ui/Layout';
import { ShowCardPrice } from './ShowCardPrice';
import { Description } from '../../../ui/Description';
import { Button } from '../../../ui/Button';
import './../style.scss';

function ShopOrder({ id, books, count, removeShopCart, addShopCart, onModalClick }) {
  const removeBook = (e) => {
    let i = id.indexOf(Number(e.target.value));
    if (i >= 0) {
      id.splice(i, 1);
    }
    removeShopCart(id);
  };
  const addBook = (e) => {
    id.push(Number(e.target.value));
    addShopCart(id);
  };
  const removeBooks = (book) => {
    let removedPart = id.filter((number) => number !== Number(book.item.id.id));
    removeShopCart(removedPart);
  };
  let selectedBooks = [];
  for (let i in id) {
    selectedBooks.push(books.find((items) => items.id === id[i]));
  }

  return (
    <React.Fragment>
      {count > 0 ? (
        <Layout extraClass="shop_basket_section">
          <ShowProduct
            onModalClick={onModalClick}
            selectedBooks={selectedBooks}
            removeBooks={removeBooks}
            addBook={addBook}
            removeBook={removeBook}
            id={id}
          />
          <Layout extraClass="shopCart shopCart_footer" direction="row" align="center" justify="space-between">
            <Button bStyle="none" direction="row" onClick={() => onModalClick(false)}>
              <span>&#8592;</span>Вернуться к покупкам
            </Button>
            <Layout>
              <Layout direction="row" extraClass="basket_amount_price">
                Итого: <ShowCardPrice selectedBooks={selectedBooks} />
              </Layout>
              <Button>Оформить</Button>
            </Layout>
          </Layout>
        </Layout>
      ) : (
        <Description color="dark" size="l">
          Корзина пуста
        </Description>
      )}
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    id: state.orderBooks.id,
    books: state.getBooks.books,
    count: state.orderBooks.count,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeShopCart: bindActionCreators(actionRemoveBook, dispatch),
    addShopCart: bindActionCreators(actionAddBook, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopOrder);
