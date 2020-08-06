import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Button, Description, Price, Title } from '../../ui';
import { setCart } from '../../store/ShoppingCart/action';
import './style.scss';

const BookProperties = ({ activeBookId, books, addInShopCart, idChoose }) => {
	let bookInfo = books.find((item) => item.id === activeBookId);
	const addInShop = (e) => {
		e.preventDefault();
		addInShopCart(activeBookId);
	};

	let result = false;
	for (let i in idChoose) {
		if (idChoose[i] === activeBookId) {
			result = true;
		}
	}

	if (bookInfo) {
		return (
			<Layout extraClass="container listBooks">
				<Layout extraClass="book_info" direction="row">
					<Layout extraClass="book_info_img">
						<img src={bookInfo.image} alt={bookInfo.title} />
						<Link to="/all" className="book_info_goBack">
							<span>&#8592;</span>Back
						</Link>
					</Layout>
					<Layout extraClass="book_info_extra">
						<Title tagName="h1" color="blue">
							{bookInfo.title}
						</Title>
						<Price size="l" price={bookInfo.price} />
						<Button
							disabled={result}
							extraClass="book_info_btn_order"
							onClick={addInShop}
							bStyle="main"
							size="m"
						>
							{result ? 'В корзине' : 'В корзину'}
						</Button>
						<Layout extraClass="book_info_item">
							<Layout extraClass="title_line">
								<Description size="l">Информация</Description>
							</Layout>
							<Layout extraClass="book_info_author" direction="row">
								<Layout>
									<span>Автор</span>
									<span>Рейтинг</span>
								</Layout>
								<Layout>
									<Description extraClass="" weight="600">{bookInfo.author}</Description>
									<Description extraClass="" weight="600">{bookInfo.rating}</Description>
								</Layout>
							</Layout>
						</Layout>
						<Layout extraClass="book_info_item">
							<Layout extraClass="title_line">
								<Description size="l" extraClass="additional-info">
									Описание
								</Description>
							</Layout>
							<Description extraClass="book_info_content" size="m">
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
		activeBookId: state.getBooks.activeBookId,
		books: state.getBooks.books,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addInShopCart: bindActionCreators(setCart, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BookProperties);
