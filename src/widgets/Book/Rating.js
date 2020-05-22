import React from 'react';
import { Layout } from '../../ui';

function SetRating({ rating }) {
	let ratings = [];
	if (rating !== null && rating <= 5) {
		for (let i = 0; i < rating; i++) {
			ratings.push(<label key={i} className="active-label" />);
		}
	} else if (rating > 5) {
		for (let i = 0; i < 5; i++) {
			ratings.push(<label key={i} className="active-label" />);
		}
	}
	while (ratings.length < 5) {
		ratings.push(<label key={ratings.length} />);
	}
	return ratings;
}

const Rating = ({ rating }) => {
	return (
		<React.Fragment>
			<Layout extraClass="rating-area" direction="row" justify="center">
				<SetRating rating={rating} />
			</Layout>
		</React.Fragment>
	);
};

export { Rating };
