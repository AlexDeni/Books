import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../widgets/Book';
import { Layout } from '../../ui/Layout';
import { getImage } from '../../global/image';

const ListBooks = ({ books, num }) => {
    return (
        <Layout wrap="wrap" direction="row" extraClass="listBooks" justify="space-between">
            {/* eslint-disable-next-line array-callback-return */}
            {books.map((book) => {
                if (book.rating > num) {
                    const { id, title, author, image, price, rating } = book;
                    return (
                        <Book
                            key={id}
                            id={id}
                            title={title}
                            author={author}
                            image={getImage(image)}
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
