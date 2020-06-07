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
		<table className="cart_item">
			<thead>
			<tr>
				<td /><td />
				<td className="basket_tit">Количество</td>
				<td className="basket_card">Стоимость</td>
			</tr>
			</thead>
			<tbody>
			{sumSelectedBooks.map((item, i) => (
				<tr key={i} className="basket_carts">
					<td>
						<img alt={i} src={item.indexBook.image} />
					</td>
					<td className="basket_card_info">
						<Link to={`/all/${item.indexBook.id}`}>
							<Button
								size="l"
								bStyle="none"
								value={item.indexBook.id}
								onClick={openBookInfo}
							>
								{item.indexBook.title}
							</Button>
						</Link>
						<Price position='center' price={item.indexBook.price} />
					</td>
					<td className="basket_cart_count">
						<Layout direction="row" justify="center" align="center">
							<Button
								size="l"
								bStyle="none"
								value={item.indexBook.id}
								onClick={removeBook}
							>
								&#8211;
							</Button>
							<Description weight="600">{item.sum}</Description>
							<Button
								size="l"
								bStyle="none"
								value={item.indexBook.id}
								onClick={addBook}
							>
								+
							</Button>
						</Layout>
					</td>
					<td>
						<Price position="center" weight="600" price={item.price} />
					</td>
					<td>
						<FontAwesomeIcon
							color="darkred"
							onClick={() => removeBooks({ item })}
							icon={faTrashAlt}
						/>
					</td>
				</tr>
			))}
			</tbody>
		</table>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		openBookProperties: bindActionCreators(bookProperties, dispatch),
	};
};

export default connect(null, mapDispatchToProps)(ShowProduct);