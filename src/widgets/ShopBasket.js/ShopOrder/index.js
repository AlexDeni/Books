import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	removeBook,
	addBook,
} from '../../../store/ShoppingCart/action';
import ShowProduct from './ShowProduct';
import { Layout, Description, Button } from '../../../ui';
import { ShowCardPrice } from './ShowCardPrice';
import './../style.scss';

const ShopOrder = ({
	id,
	books,
	count,
	removeShopCart,
	addShopCart,
	onModalClick,
}) => {
	const removeBook = (e) => {
	    let targetId = Number(e.target.value)
		removeShopCart(id, targetId);
	};

	const addBook = (e) => {
        let targetId = Number(e.target.value)
		addShopCart(id, targetId);
	};

	const removeBooks = (book) => {
		let removedPart = id.filter((number) => number !== Number(book.item.indexBook.id));
		removeShopCart(removedPart);
	};

	let selectedBooks = [];
	for (let i in id) {
		selectedBooks.push(books.find((items) => items.id === id[i]));
	}

	if (count > 0) {
		return (
			<Layout extraClass="shop_basket_section">
				<ShowProduct
					modalWindow={onModalClick}
					selectedBooks={selectedBooks}
					removeBooks={removeBooks}
					addBook={addBook}
					removeBook={removeBook}
					id={id}
				/>
				<Layout
					extraClass="shopCart shopCart_footer"
					direction="row"
					align="center"
					justify="space-between"
				>
					<Button
						bStyle="none"
						direction="row"
						onClick={() => onModalClick(false)}
					>
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
		);
	}

		return (
			<Description color="dark" size="l">
				Корзина пуста
			</Description>
		);

};

const mapStateToProps = (state) => {
	return {
		id: state.orderBooks.id,
		books: state.getBooks.books,
		count: state.orderBooks.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeShopCart: bindActionCreators(removeBook, dispatch),
		addShopCart: bindActionCreators(addBook, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopOrder);
