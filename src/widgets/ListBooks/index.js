import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import { Layout } from '../../ui';
import { checkImage } from '../../helpers';
import withoutImage from '../../static/nobook.jpg';

const ListBooks = ({ books, num }) => {
	return (
		<Layout
			wrap="wrap"
			direction="row"
			extraClass="listBooks"
			justify="space-between"
		>
			{books.map((book) => {
				if (book.rating > num) {
					const { id, title, author, image, price, rating } = book;
					return (
						<Book
							key={id}
							id={id}
							title={title}
							author={author}
							image={checkImage({ image, withoutImage })}
							price={price}
							rating={rating}
						/>
					);
				}
			})}
		</Layout>
	);
};

ListBooks.propTypes = {
	num: PropTypes.number,
	books: PropTypes.array,
};
ListBooks.defaultProps = {
	num: 0,
};

export { ListBooks };
