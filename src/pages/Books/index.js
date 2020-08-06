import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../ui';
import ErrorText from '../../widgets/LoaderError/Error';
import { Filter, ListBooks, Loader } from '../../widgets';

class AllBooks extends Component {
	state = {
		filterStatus: false,
		filterResult: '',
	};

	handleSearchClick = (value) => {
		this.setState({
			filterResult: value,
			filterStatus: true,
		});
	};

	setRatingBooks = (value) => {
		this.setState({
			filterResult: value,
		});
	};

	render() {
		const { books, isLoading, error } = this.props;
		const { filterStatus, filterResult } = this.state;
		if (!books) {
			return null;
		}
		let results = books;
		if (filterStatus) {
			results = filterResult;
		}

		if (isLoading) {
			return <Loader />;
		}
		return (
			<Layout extraClass="container">
				<Layout extraClass="listBooks">
					<Filter
						books={books}
						setBooks={results}
						updateBooks={this.handleSearchClick}
						setRatingBooks={this.setRatingBooks}
					/>
					<ErrorText errorText={error} />
					<ListBooks books={results} />
				</Layout>
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		books: state.getBooks.books,
		isLoading: state.getBooks.isLoading,
		error: state.getBooks.error,
	};
}

export default connect(mapStateToProps)(AllBooks);
