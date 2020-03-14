import React, {Component}  from "react";
import { connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import { bindActionCreators } from 'redux';
import { actionGetBooks } from '../../store/Books/actionGetBooks'
import {actionSearchBooks} from '../../store/Books/actionSearchBooks'
import {actionSetRatingBooks} from "../../store/Books/actionSetRatingBooks";
import {ListBooks} from "../../modules/ListBooks";
import {Filter} from "../../widgets/Filters";
import {Loader} from "../../widgets/Loader";

class AllBooks extends Component {
   componentDidMount() {
        this.props.getAllBooks()
    }
    render() {
        const {books, searchBooks, setRatingBooks, loader} = this.props;
        if(!books){
            return null
        }
        return (
            <React.Fragment>
                <Layout extraClass='container'>
                    {loader ? <Loader/> :
                        <Layout wrap='wrap' direction='row' justify='spaceBetween' extraClass='listBooks'>
                            <Filter books={books} setBooks={searchBooks} setRatingBooks={setRatingBooks}/>
                            <ListBooks books={books} />
                        </Layout>
                    }
                </Layout>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.getBooks.books,
        loader: state.getBooks.loader
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllBooks: bindActionCreators(actionGetBooks, dispatch),
        searchBooks: bindActionCreators(actionSearchBooks, dispatch),
        setRatingBooks: bindActionCreators(actionSetRatingBooks, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)









