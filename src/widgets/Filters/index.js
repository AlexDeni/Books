import React from 'react';
import { Layout } from '../../ui';
import { RatingSearch } from './RatingSearch';
import { FilterSearch } from './FilterSearch';

const Filter = ({ books, setBooks, updateBooks, setRatingBooks }) => {
	return (
		<Layout extraClass="filterBtn" direction="row" wrap="wrap">
			<FilterSearch books={books} updateBooks={updateBooks} />
			<RatingSearch setBooks={setBooks} setRatingBooks={setRatingBooks} />
		</Layout>
	);
};

export { Filter };
