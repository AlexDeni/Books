import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../ui/Layout';
import { ListBooks } from '../../modules/ListBooks';
import { Loader } from '../../widgets/LoaderError';
import { Filter } from '../../widgets/Filters';
import ErrorText from '../../widgets/LoaderError/Error';

class AllBooks extends Component {
  constructor() {
    super();
    this.state = {
      filterStatus: false,
      setResult: '',
    };
  }
  handleSearchClick(value) {
    this.setState({
      setResult: value,
      filterStatus: true,
    });
  }
  setRatingBooks(value) {
    this.setState({
      setResult: value,
    });
  }
  render() {
    const { books, loader } = this.props;
    if (!books) {
      return null;
    }
    let results = books;
    if (this.state.filterStatus) {
      results = this.state.setResult;
    }
    return (
      <Layout extraClass="container">
        {loader ? (
          <Loader />
        ) : (
          <Layout extraClass="listBooks">
            <Filter
              books={books}
              updateBooks={this.handleSearchClick}
              setBooks={results}
              setRatingBooks={this.setRatingBooks}
            />
            <ErrorText errorText={this.props.error} />
            <ListBooks books={results} />
          </Layout>
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.getBooks.books,
    loader: state.getBooks.loader,
    error: state.getBooks.error,
  };
}

export default connect(mapStateToProps)(AllBooks);
