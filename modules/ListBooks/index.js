import React from 'react'
import {Layout} from "../../ui/Layout";
import Book from '../../widgets/Book'
import {getImage} from '../../global/image'
import PropTypes from "prop-types"

function ListBooks({books, num}) {
    return(
        <Layout extraClass='container'>
            <Layout wrap='wrap' direction='row' extraClass='listBooks'>
                {books.map((book)=>{
                    if(book.rating > num){
                        const {id, title, author, image, price, rating} = book;
                        return (
                            <div key={id}>
                                <div>
                                    <Book key={id}
                                          id={id}
                                          title={title}
                                          author={author}
                                          image={getImage(image)}
                                          price={price}
                                          rating={rating}
                                          curr = 'UA'
                                    />
                                </div>
                            </div>
                        )
                    }
                })}
            </Layout>
        </Layout>
    )
}

ListBooks.propTypes = {
    num: PropTypes.number,
};
ListBooks.defaultProps = {
    num: 0
};


export {ListBooks}