import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Button, Description, Price, Title } from '../../ui';
import { actionSetCart } from '../../store/ShoppingCart/actionCart';
import './style.scss';

const BookProperties = ({ id, books, addInShopCart, idChoose }) => {
	let bookInfo = books.find((item) => item.id === id);
	const addInShop = (e) => {
		e.preventDefault();
		addInShopCart(id);
	};
	let result = false;
	for (let i in idChoose) {
		if (idChoose[i] === id) {
			result = true;
		}
	}

	if (bookInfo) {
		return (
			<Layout extraClass="container book-info listBooks">
				<Layout wrap="wrap" direction="row">
					<Layout>
						<img src={bookInfo.image} alt={bookInfo.title} />
						<Link to="/all" className="property-goBack">
							<span>&#8592;</span>Back
						</Link>
					</Layout>
					<Layout extraClass="book-extra-info">
						<Title tagName="h1" color="blue">
							{bookInfo.title}
						</Title>
						<Price size="l" price={bookInfo.price} />
						<Button
							disabled={result}
							extraClass="btn_order_info"
							onClick={addInShop}
							bStyle="main"
							size="m"
						>
							{result ? 'В корзине' : 'В корзину'}
						</Button>
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
								<Description size="l" className="additional-info">
									Описание
								</Description>
							</Layout>
							<Description extraClass="extra-info" size="m">
								{bookInfo.info}
							</Description>
						</Layout>
					</Layout>
				</Layout>
			</Layout>
		);
	}
	return (
		<Layout extraClass="container listBooks">
			<Description size="l">Sorry, but the book was not found</Description>
		</Layout>
	);
};

function mapStateToProps(state) {
	return {
		idChoose: state.orderBooks.id,
		id: state.getBooks.id,
		books: state.getBooks.books,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		addInShopCart: bindActionCreators(actionSetCart, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookProperties);
