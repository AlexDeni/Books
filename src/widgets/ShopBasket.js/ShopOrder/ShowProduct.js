import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, Button, Price, Layout } from '../../../ui';
import { bindActionCreators } from 'redux';
import { bookProperties } from '../../../store/Books/action';
import { connect } from 'react-redux';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ShowProduct = ({
	selectedBooks,
	removeBook,
	addBook,
	removeBooks,
	openBookProperties,
	modalWindow,
}) => {
	let indexBasketTitle  = {};

	selectedBooks.map((index) => (indexBasketTitle [index.title] = indexBasketTitle [index.title] + 1 || 1));

	let sumSelectedBooks = Object.keys(indexBasketTitle ).map(function (id) {
		return {
			indexBook: selectedBooks.find((item) => item.title === id),
			sum: indexBasketTitle [id],
			price:
				indexBasketTitle [id] * selectedBooks.find((item) => item.title === id).price,
		};
	});

	const openBookInfo = (e) => {
		openBookProperties(Number(e.target.value));
		modalWindow(false);
	};

	return (
		<>
			{sumSelectedBooks.map(item => (
				<div key={item.indexBook.id} className="basket_cart">
					<div className="basket_cart_column">
						<img className="basket_cart_img" alt={item.indexBook.id} src={item.indexBook.image} />
					</div>
					<div className="basket_cart_column">
						<div className="basket_card_info">
							<Link to={`/all/${item.indexBook.id}`}>
								<Button
									size="l"
									bStyle="none"
									extraClass="basket_card_link_info"
									value={item.indexBook.id}
									onClick={openBookInfo}
								>
									{item.indexBook.title}
								</Button>
							</Link>
							<Price position='center' price={item.indexBook.price}/>
						</div>
					</div>
					<div className="basket_cart_column">
						<div className="basket_cart_count">
							<p className="basket_cart_dop_info">Количество</p>
							<Layout direction="row" justify="center" align="center">
								<Button
									size="l"
									bStyle="none"
									value={item.indexBook.id}
									onClick={removeBook}
								>
									&#8211;
								</Button>
								<Description extraClass="basket_cart_price" weight="600">{item.sum}</Description>
								<Button
									size="l"
									bStyle="none"
									value={item.indexBook.id}
									onClick={addBook}
								>
									+
								</Button>
							</Layout>
						</div>
					</div>
					<div className="basket_cart_column">
						<p className="basket_cart_dop_info">Цена</p>
						<Price position="center" weight="600" price={item.price} />
					</div>
					<div className="basket_cart_column basket_cart_delete">
						<FontAwesomeIcon
							color="darkred"
							onClick={() => removeBooks({ item })}
							icon={faTrashAlt}
						/>
					</div>
				</div>
			))}
		</>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		openBookProperties: bindActionCreators(bookProperties, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(ShowProduct);