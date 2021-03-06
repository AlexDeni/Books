import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Layout, Button, Description, Price } from '../../ui';
import { Rating } from './Rating';
import { setCart } from '../../store/ShoppingCart/action';
import { bookProperties } from '../../store/Books/action';

const Book = ({
	title,
	author,
	image,
	rating,
	addInShopCart,
	openBookProperties,
	price,
	id,
	idChoose,
}) => {
	const addInShop = () => {
		addInShopCart(id);
	};

	const openBook = () => {
		openBookProperties(id);
	};

	let result = false;
	for (let i in idChoose) {
		if (idChoose[i] === id) {
			result = true;
		}
	}

	return (
		<Layout extraClass="book">
			<img src={image} alt={image} className="book_image" />
			<div className="book_card">
				<Description size="l" position="center">
					{title}
				</Description>
				<Rating rating={rating} />
				<Description
					extraClass="book_author"
					position="center"
				>{`Автор: ${author}`}</Description>
				<Price position="center" size="l" price={price} />
				<Layout justify="space-between" direction="row" extraClass="book-btn">
					<Button bStyle="main" disabled={result} onClick={addInShop}>
						{result ? 'В корзине' : 'В корзину'}
					</Button>
					<Link to={`/all/${id}`} onClick={openBook}>
						<Button bStyle="main">Открыть</Button>
					</Link>
				</Layout>
			</div>
		</Layout>
	);
};

Book.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string.isRequired,
	price: PropTypes.number,
	author: PropTypes.string,
	rating: PropTypes.number,
};

Book.defaulttypes = {
	author: 'Автор',
	rating: 0,
	price: 0,
};

function mapStateToProps(state) {
	return {
		idChoose: state.orderBooks.id,
		books: state.getBooks.books,
		count: state.orderBooks.count,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addInShopCart: bindActionCreators(setCart, dispatch),
		openBookProperties: bindActionCreators(bookProperties, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
