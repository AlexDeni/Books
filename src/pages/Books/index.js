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
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.setRatingBooks = this.setRatingBooks.bind(this);
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
    const { books, loader, error } = this.props;
    const { filterStatus, setResult } = this.state;
    if (!books) {
      return null;
    }
    let results = books;
    if (filterStatus) {
      results = setResult;
    }
    if (loader) {
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
    loader: state.getBooks.loader,
    error: state.getBooks.error,
  };
}

export default connect(mapStateToProps)(AllBooks);
