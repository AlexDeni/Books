import React, {Component}  from "react";
import { connect } from "react-redux"
import {Layout} from "../../ui/Layout";
import { bindActionCreators } from 'redux';
import { getAllLibrary } from '../../store/actions/getAllLibrary'
import {searchBooks} from '../../store/actions/searchBooks'
import {ListBooks} from "../../modules/ListBooks";
import {Filter} from "../../widgets/Filters/Filter";


class AllBooks extends Component {
   componentDidMount() {
        this.props.getAllLibrary()
    }
    render() {
        const {books, searchBooks} = this.props;
        if(!books){
            return null
        }
        console.log({searchBooks})
        return (
            <React.Fragment>
                <Layout extraClass='container'>
                    <Layout wrap='wrap' direction='row' justify='spaceBetween' extraClass='listBooks'>
                        <Filter books={books} setBooks={searchBooks} />
                        <ListBooks books={books}/>
                    </Layout>
                </Layout>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.allLibrary.books
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllLibrary: bindActionCreators(getAllLibrary, dispatch),
        searchBooks: bindActionCreators(searchBooks, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)









