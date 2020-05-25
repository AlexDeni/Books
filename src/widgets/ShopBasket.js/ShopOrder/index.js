import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	actionRemoveBook,
	actionAddBook,
} from '../../../store/ShoppingCart/actionCart';
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
		// ой шото сложно. ты должен в редакс экшн передлать типа removeBook(id) - в нем уже берешь массив который там лежит
		// находишь индекс элемента по id и делаешь splice
		let i = id.indexOf(Number(e.target.value));
		if (i >= 0) {
			id.splice(i, 1);
		}
		removeShopCart(id);
	};
	const addBook = (e) => {
		//То же самое - делаешь это в редакс экшн. Передаешь данные которые туда надо засунуть
		id.push(Number(e.target.value));
		addShopCart(id);
	};
	const removeBooks = (book) => {
		let removedPart = id.filter((number) => number !== Number(book.item.id.id));
		removeShopCart(removedPart);
	};
	// selectedBooks - выноси в редакс - а то у тебя данные и там и там хранятся
	let selectedBooks = [];
	for (let i in id) {
		selectedBooks.push(books.find((items) => items.id === id[i]));
	}

	// Шо за count, почему оно тут, надо короче переписать логику тут
	if (count > 0) {
		return (
			<Layout extraClass="shop_basket_section">
				<ShowProduct
					onModalClick={onModalClick}
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

	// Должно быть типа if(!books.length) {
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
		removeShopCart: bindActionCreators(actionRemoveBook, dispatch),
		addShopCart: bindActionCreators(actionAddBook, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopOrder);
