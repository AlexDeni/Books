import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from '../../ui';
import ErrorText from '../../widgets/LoaderError/Error';
import { Filter, ListBooks, Loader } from '../../widgets';

class AllBooks extends Component {
    state = {
        filterStatus: false,
        setResult: '',
    };
    handleSearchClick = (value) => {
        this.setState({
            setResult: value,
            filterStatus: true,
        });
    };
    setRatingBooks = (value) => {
        this.setState({
            setResult: value,
        });
    };
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
